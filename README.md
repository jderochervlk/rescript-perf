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
### Large objects
```
ReScript#caml_obj x 74,128 ops/sec ±3.56% (89 runs sampled)
lodash#isEqual x 85,058 ops/sec ±5.28% (80 runs sampled)
deep-equal#deep-equal x 8,725 ops/sec ±4.42% (84 runs sampled)
immutable#equals x 665 ops/sec ±6.22% (77 runs sampled)
fast-deep-equal#deep-equal x 90,871 ops/sec ±5.19% (80 runs sampled)
Fastest is fast-deep-equal#deep-equal
```
### Small objects
```
ReScript#caml_obj x 1,688,417 ops/sec ±61.01% (63 runs sampled)
lodash#isEqual x 792,134 ops/sec ±8.46% (71 runs sampled)
deep-equal#deep-equal x 10,203 ops/sec ±4.64% (80 runs sampled)
immutable#equals x 406,771 ops/sec ±8.89% (67 runs sampled)
fast-deep-equal#deep-equal x 2,570,114 ops/sec ±5.96% (69 runs sampled)
Fastest is fast-deep-equal#deep-equal,ReScript#caml_obj
```