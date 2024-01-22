# rescript-perf

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

## results
```
ReScript#caml_obj x 38,493,962 ops/sec ±10.43% (49 runs sampled)
lodash#isEqual x 10,810,920 ops/sec ±7.78% (57 runs sampled)
deep-equal#deep-equal x 21,620 ops/sec ±5.31% (76 runs sampled)
immutable#equals x 1,296 ops/sec ±7.05% (76 runs sampled)
fast-deep-equal#deep-equal x 47,004,261 ops/sec ±17.49% (40 runs sampled)
Fastest is fast-deep-equal#deep-equal
```