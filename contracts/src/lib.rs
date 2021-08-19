use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::near_bindgen;
// use uuid::Uuid;
use near_sdk::collections::{LookupMap};
use near_sdk::json_types::ValidAccountId;
use near_sdk::{
    env, AccountId, Balance, CryptoHash, PanicOnDefault,
};
use compression::prelude::*;
use sha256::digest_bytes;

near_sdk::setup_alloc!();



/// Helper structure to for keys of the persistent collections.
#[derive(BorshSerialize)]
pub enum StorageKey {
    BrambleTransactions,
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize,PanicOnDefault)]
pub struct Contract {
    // SETUP CONTRACT STATE
    pub bramble_transactions: LookupMap<String, Vec<u8>>,
    pub owner_id: AccountId,


}

#[near_bindgen]
impl Contract {

    #[init]
    pub fn new(owner_id: ValidAccountId) -> Self {
        let this = Self {
            bramble_transactions: LookupMap::new(StorageKey::BrambleTransactions.try_to_vec().unwrap()),
            owner_id: owner_id.into(),

        };

        this
    }
    // ADD CONTRACT METHODS HERE

    pub fn add_data(&mut self, transactiondata: String) {
        
        assert_eq!(
            &env::predecessor_account_id(),
            &self.owner_id,
            "Owner's method"
        );

        let compressed1 = transactiondata.as_bytes()
        .into_iter()
        .cloned()
        .encode(&mut BZip2Encoder::new(9), Action::Finish)
        .collect::<Result<Vec<_>, _>>()
        .unwrap();
        
        let val = digest_bytes(&compressed1);

        self.bramble_transactions.insert(&val, &compressed1);
        // compressed1

    }

}

/*
 * the rest of this file sets up unit tests
 * to run these, the command will be:
 * cargo test --package rust-counter-tutorial -- --nocapture
 * Note: 'rust-counter-tutorial' comes from cargo.toml's 'name' key
 */

// use the attribute below for unit tests
#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::MockedBlockchain;
    use near_sdk::{testing_env, VMContext};

    // part of writing unit tests is setting up a mock context
    // in this example, this is only needed for env::log in the contract
    // this is also a useful list to peek at when wondering what's available in env::*
    fn get_context(input: Vec<u8>, is_view: bool) -> VMContext {
        VMContext {
            current_account_id: "alice.testnet".to_string(),
            signer_account_id: "robert.testnet".to_string(),
            signer_account_pk: vec![0, 1, 2],
            predecessor_account_id: "jane.testnet".to_string(),
            input,
            block_index: 0,
            block_timestamp: 0,
            account_balance: 0,
            account_locked_balance: 0,
            storage_usage: 0,
            attached_deposit: 0,
            prepaid_gas: 10u64.pow(18),
            random_seed: vec![0, 1, 2],
            is_view,
            output_data_receivers: vec![],
            epoch_height: 19,
        }
    }

    // TESTS HERE
}
