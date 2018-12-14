# PokéLAB

Pokémon data & utilities to build tools.

## Use it

```javascript
import { Pokedex, Types } from 'pokelab';

const electricPokemon = Pokedex.All.filter(({ types }) =>
	types.includes(Types.Electric),
);
```
