import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Web3Website } from '../target/types/web3_website';

describe('web3_website', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Web3Website as Program<Web3Website>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
