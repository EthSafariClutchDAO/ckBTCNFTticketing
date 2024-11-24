
# `clutch_dao`

Welcome to your new `clutch_dao` project and to the Internet Computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with `clutch_dao`, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

## CLUTCH DAO Project description

Clutch DAO is a decentralized platform that leverages blockchain technology, specifically ckBTC and Threshold Schnorr signatures, to fuse environmental sustainability efforts with the development of basketball infrastructure and programs. The project empowers communities to engage in plastic waste segregation efforts, incentivizes their participation with blockchain tokens, and channels these efforts into building basketball courts and hosting basketball events.

How the System Works
Plastic Waste Segregation Efforts:

Participants segregate plastic waste in their communities.
The DAO verifies their efforts using a proof-of-participation mechanism.
Blockchain tokens are minted as rewards for verified contributions.
Blockchain Incentivization:

Tokens earned can be redeemed for:
Carbon Credit NFTs: Representing a quantified environmental impact.
Basketball NFT Tickets: Redeemable for access to basketball games and events.

Building Basketball Courts:

Tokens are pooled into the DAO treasury.
Treasury funds are directed toward constructing basketball courts in underserved communities, using DAO governance.

DAO Governance with Threshold Schnorr:

Token holders participate in governance by voting on:
Basketball court construction proposals.
Budget allocation for community basketball programs.
Voting utilizes Threshold Schnorr signatures, ensuring secure, decentralized, and multi-signature governance.

Basketball NFT Ticketing:

NFT tickets are issued on the ICP blockchain, integrating ckBTC for seamless payment and cross-chain functionality.
NFT tickets promote aesthetic creativity as participants engage in NFT art creation.

Leveraging ckBTC
ckBTC (chain-key Bitcoin) provides the following benefits to CLUTCH DAO:

Seamless Bitcoin Integration: Users can pay or redeem incentives in Bitcoin without bridging to external networks, enhancing user trust.
Low Transaction Fees: Makes the system more accessible for underprivileged communities.
Cross-Chain Functionality: Enables users to transfer and trade incentives or NFTs across platforms securely.
Instant Settlements: Enhances the redemption process for NFT tickets or tokenized rewards.

Using Threshold Schnorr Signatures
Threshold Schnorr is used to implement a secure, decentralized, and transparent voting mechanism in the DAO:

Multi-Signature Voting:
Proposals for basketball courts or event funding are signed and validated using Threshold Schnorr.
Ensures no single party has undue control over governance.

Privacy and Security:
The cryptographic design ensures voter identities remain confidential while preventing double voting.

Distributed Participation:
Allows community members to vote securely, even from low-bandwidth areas.

Basketball Meets Sustainability
CLUTCH DAO bridges the gap between environmental impact and sports development:

Environmental Incentives:
Encourages communities to adopt sustainable practices, quantified in carbon credit NFTs.
Sports for Development:
Promotes basketball as a tool for youth engagement and community building.
DAO for Community Ownership:
Empowers token holders to shape the development of basketball programs democratically.

Why This is Innovative
Fusion of Environmentalism and Blockchain:
A unique approach to combining waste segregation efforts with tokenized rewards for sports development.

ckBTC Integration:
Offers seamless and secure Bitcoin payments in an eco-conscious context.

Threshold Schnorr DAO Governance:
Leverages cutting-edge cryptography for a decentralized and fair decision-making process.

NFT Ticketing:
Environmentally friendly, traceable, and easily transferable digital tickets for sports events.

Benefits to the ICP Ecosystem
Showcases ICP's Capabilities:
Demonstrates how ckBTC and Threshold Schnorr can power impactful cross-chain applications.

Drives Adoption:
Encourages communities to adopt blockchain technology for real-world problems.

Innovates DAO Functionality:
Sets a benchmark for decentralized governance in grassroots sports programs.

Conclusion
CLUTCH DAO is more than a project; it’s a movement that unites environmental sustainability, sports, and decentralized governance underpinned by blockchain technology. By integrating ckBTC for seamless cross-chain payments and utilizing Threshold Schnorr for secure, transparent DAO operations, we aim to inspire communities to take collective ownership of their environment and their future, one basketball court at a time.


## Frontend webpage mockup for the clutch DAO
<img width="960" alt="FIRST_PAGE" src="https://github.com/user-attachments/assets/e6f921ce-69f5-434e-b752-4775402b2773">

<img width="960" alt="SECOND_PAGE" src="https://github.com/user-attachments/assets/699217f9-eb28-4911-854f-b4f99f5949bd">
<img width="960" alt="LASTPAGE" src="https://github.com/user-attachments/assets/27025be6-95f4-4265-a7d4-120e8f518f62">

## clutch DAO project presentation
[https://drive.google.com/file/d/1ZNKgorxZysxfsscKWBb1Zd4PLQXPRfRS/view?usp=sharing]

## Project Video 
[https://youtu.be/TJvuovmtMPw?si=ahu3ol9XYBAt9FkZ]

## Token deployed on icp mainet [Clutch token]
The deployed token can be found on the ICP mainnet. For more details, visit the token repository[https://github.com/ndicu5156/CLUTCH_TOKEN.git]. Visit the deployed token in Mainnet https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=qkzcw-6yaaa-aaaap-qhxja-cai.


![clutch](https://github.com/user-attachments/assets/f5ded883-988b-4479-b4f2-3400d45eb406)

<img width="273" alt="plug" src="https://github.com/user-attachments/assets/8c9c40cd-dcbd-45a5-bf06-7e7685d892d8">


# ckBTCNFTticketing
 NFTTicking webapp demo url ;
 [https://kzmjv0shoooz2ccex851.lite.vusercontent.net/]
 
Leveraging NFT tickets for aesthetic prowess.

![NFT ticketing](https://github.com/user-attachments/assets/6d5fd925-5c14-42de-810c-72032390f2b9)

Following the YellowHeart concept.

![yellowstone nftticketing](https://github.com/user-attachments/assets/b977f6d3-f8ed-43c6-bd81-c78adfbde0a0)


If you want to start working on your project right away, you might want to try the following commands:

```bash
cd clutch_dao/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor



