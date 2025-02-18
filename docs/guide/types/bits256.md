---
title: "Bits256"
parent: "Types"
grand_parent: "Guide"
---

[info]: this file is autogenerated
# Bits256

In Fuel, a type called `b256` represents hashes and holds a 256-bit value. The TypeScript SDK represents `b256` as `string` value for portability and can convert to `Uint8Array` as needed when the [raw bytes](./bytes32.md) are required.

Here are some example tools in the SDK:


```typescript
  import { arrayify, hexlify, randomBytes, getRandomB256 } from 'fuels';

  // here are some useful ways to generate random b256 values
  const randomB256Bytes: Bytes = randomBytes(32);
  const randomB256: string = getRandomB256();

  // a [u8; 32] (Uint8Array) b256 can be converted to hex string
  const hexedB256: string = hexlify(randomB256Bytes);

  // a string b256 can be converted to Uint8Array
  expect(arrayify(randomB256Bytes)).toEqual(arrayify(hexedB256));

  // a string b256 can be safely passed into hexlify without mangling
  expect(randomB256).toEqual(hexlify(randomB256));
```
###### [see code in context](https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L107-L122)

---


A Bit256 value is also supported as part of the [Address](./address.md) libraries.


```typescript
  import { Address } from 'fuels';
  const address = Address.fromB256(ADDRESS_B256);

  expect(address.toAddress()).toEqual(ADDRESS_BECH32);
  expect(address.toB256()).toEqual(ADDRESS_B256);
```
###### [see code in context](https://github.com/FuelLabs/fuels-ts/blob/master/packages/fuel-gauge/src/doc-examples.test.ts#L59-L65)

---

