# Near Protocol's NCD programme Demo

## Aim:

To help incentivize web2 based games in crypto tokens and help them move to web3 
Apparatus: API module, Bramble Chain, NEAR Protocol contract

## Procedure: 

1. API module sends some transactions to Bramble chain
2. Bramble validates those transactions
3. NEAR smart contract sends those transactions to NEAR Protocol chain, where it validates itself 
4. After the block is confirmed, Bramble chains receive confirmation and save the confirmation
 transaction as a single block

## Observations: 

200 transactions saved as one block on NEAR Protocol costs approx. USD 4.8 (as per todays value)

## Inference: 
The whole deal makes Bramble and NEAR escape the deathly slow transactional speed due to heavy block size and makes Bramble a small layer 2 like scaling solution whereas NEAR maintains its speed. The reward is distributed by the Bramble chain after the confirmation of block.


## How to run this repo
```
yarn build:contracts
yarn deploy
near call CONTRACT_ID new '{"owner_id":"OWNER_ID"}' --accountId=CALLER_ID
```

After doing this, you can just go
```
cd scripts
node app1.js
```
