'use client'

import { useState, useEffect } from "react"
import { Web3Storage } from "web3.storage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Wallet, Ticket, Upload } from 'lucide-react'
import { toast } from "sonner"

// Note: In a production app, this should be an environment variable
const API_KEY = "YOUR_WEB3_STORAGE_API_KEY"
const client = new Web3Storage({ token: API_KEY })

// Mock IDL for NFT Ticketing
const nftTicketingIDL = {
  mintTicket: () => {},
  buyTicket: () => {},
}

const checkConnection = async () => {
  if (window.ic?.plug) {
    return await window.ic.plug.isConnected()
  }
  return false
}

export default function NFTTicketing() {
  const [connected, setConnected] = useState(false)
  const [ticketId, setTicketId] = useState<string>("")
  const [metadata, setMetadata] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const init = async () => {
      const isConnected = await checkConnection()
      setConnected(isConnected)
    }
    init()
  }, [])

  const connectWallet = async () => {
    try {
      setIsLoading(true)
      if (!window.ic?.plug) {
        window.open('https://plugwallet.ooo/', '_blank')
        toast.info("Please install Plug wallet and refresh the page")
        return
      }
      const connected = await window.ic.plug.isConnected()
      if (!connected) {
        const whitelist = ['YOUR_CANISTER_ID']
        const host = 'https://mainnet.dfinity.network' // or https://ic0.app for mainnet
        await window.ic.plug.requestConnect({ whitelist, host })
      }
      const principal = await window.ic.plug.agent.getPrincipal().toText()
      setConnected(true)
      toast.success(`Connected as: ${principal}`)
    } catch (error) {
      toast.error("Failed to connect wallet")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const mintTicket = async () => {
    try {
      setIsLoading(true)
      const metadataCID = await uploadMetadata(metadata)
      const nftTicketing = await createActor()
      const newTicketId = await nftTicketing.mintTicket(
        window.ic.plug.agent.getPrincipal(),
        metadataCID,
        price
      )
      setTicketId(newTicketId)
      toast.success(`Ticket minted successfully! ID: ${newTicketId}`)
    } catch (error) {
      toast.error("Failed to mint ticket")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const buyTicket = async () => {
    try {
      setIsLoading(true)
      const nftTicketing = await createActor()
      const result = await nftTicketing.buyTicket(ticketId)
      toast.success("Ticket purchased successfully!")
    } catch (error) {
      toast.error("Failed to purchase ticket")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const uploadMetadata = async (metadata: string) => {
    const file = new File([metadata], "ticket.json", { type: "application/json" })
    const cid = await client.put([file])
    return cid
  }

  const createActor = async () => {
    const canisterId = "YOUR_CANISTER_ID"
    return await window.ic.plug.createActor({
      canisterId,
      interfaceFactory: nftTicketingIDL,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 md:p-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">NFT Ticketing System</CardTitle>
          <CardDescription>Mint and purchase NFT tickets using Internet Computer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!connected ? (
            <Button
              size="lg"
              className="w-full"
              onClick={connectWallet}
              disabled={isLoading}
            >
              <Wallet className="mr-2 h-5 w-5" />
              {isLoading ? "Connecting..." : "Connect Plug Wallet"}
            </Button>
          ) : (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metadata">Ticket Metadata</Label>
                  <Textarea
                    id="metadata"
                    placeholder="Enter ticket metadata (JSON format)"
                    value={metadata}
                    onChange={(e) => setMetadata(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price (ckBTC)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                </div>
                <Button
                  className="w-full"
                  onClick={mintTicket}
                  disabled={isLoading || !metadata || price <= 0}
                >
                  <Upload className="mr-2 h-5 w-5" />
                  {isLoading ? "Minting..." : "Mint Ticket"}
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ticketId">Ticket ID</Label>
                  <Input
                    id="ticketId"
                    placeholder="Enter ticket ID to purchase"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                  />
                </div>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={buyTicket}
                  disabled={isLoading || !ticketId}
                >
                  <Ticket className="mr-2 h-5 w-5" />
                  {isLoading ? "Purchasing..." : "Buy Ticket"}
                </Button>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Powered by Internet Computer and Web3.Storage
        </CardFooter>
      </Card>
    </div>
  )
}

