# Express server with decorators
NodeJS express server using TypeScript with decorators.

## @ExpressController
Class decorator for express controllers

```ts
@ExpressController
export class SampleController {}
```

on import automatically creates instance and registers it.

### @ExpressMapping
Creates method decorator that registers method in express app.

```ts
@ExpressMapping('/api/sample', 'get')
emptyObjectGet(req: Request, res: Response) {
  res.setHeader('Content-Type', 'application/json');
  res.send({});
}
```

### @GetMapping
Uses ExpressMapping with predefined request method "get"

### @PostMapping
Uses ExpressMapping with predefined request method "post"

### @PutMapping
Uses ExpressMapping with predefined request method "put"

### @DeleteMapping
Uses ExpressMapping with predefined request method "delete"

### @UseMapping
Uses ExpressMapping with predefined request method "use"
 
## @AutowireComponent
Class decorator for autowire components

```ts
@AutowireComponent
export class SampleService implements SampleServiceInterface {}
```

on import automatically creates instance and registers it.

### @Autowire
Field decorator that set's instance of registered AutowireComponent

```ts
@Autowire("SampleService")
sampleService: SampleServiceInterface;
```
