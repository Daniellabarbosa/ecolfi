import {
  Connection,
  clusterApiUrl,
  Keypair,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

import {
  createMemoInstruction,
} from '@solana/spl-memo';

const connection =
  new Connection(
    clusterApiUrl('devnet'),
    'confirmed'
  );

const wallet =
  Keypair.generate();

export async function sendRecycleMemo(
  material,
  points
) {

  try {

    const memo =
      `RECYCLE_${material}_${points}`;

    const transaction =
      new Transaction().add(

        createMemoInstruction(
          memo,
          []
        )

      );

    const signature =
      await sendAndConfirmTransaction(
        connection,
        transaction,
        [wallet]
      );

    return signature;

  } catch(error) {

    console.log(error);

    return null;
  }
}