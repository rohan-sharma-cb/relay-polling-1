/**
 * @generated SignedSource<<3875b477dbf32d62afeaae6277210e4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesQuery$variables = {};
export type pagesQuery$data = {
  readonly getFilm: {
    readonly characters: ReadonlyArray<{
      readonly birthYear: string | null;
      readonly eyeColors: ReadonlyArray<string> | null;
      readonly gender: string | null;
      readonly hairColors: ReadonlyArray<string> | null;
      readonly height: number | null;
      readonly mass: number | null;
      readonly name: string;
      readonly skinColors: ReadonlyArray<string> | null;
    }>;
    readonly director: string;
    readonly planets: ReadonlyArray<{
      readonly climates: ReadonlyArray<string> | null;
      readonly diameter: number | null;
      readonly gravity: number | null;
      readonly name: string;
      readonly orbitalPeriod: number | null;
      readonly population: any | null;
      readonly rotationPeriod: number | null;
      readonly surfaceWater: number | null;
      readonly terrains: ReadonlyArray<string> | null;
    }>;
    readonly species: ReadonlyArray<{
      readonly averageHeight: number | null;
      readonly averageLifespan: number | null;
      readonly classification: string | null;
      readonly designation: string;
      readonly eyeColors: ReadonlyArray<string> | null;
      readonly hairColors: ReadonlyArray<string> | null;
      readonly language: string | null;
      readonly name: string;
      readonly skinColors: ReadonlyArray<string> | null;
    }>;
    readonly starships: ReadonlyArray<{
      readonly MGLT: number | null;
      readonly cargoCapacity: any | null;
      readonly consumables: number | null;
      readonly costInCredits: any | null;
      readonly crew: number | null;
      readonly hyperdriveRating: number | null;
      readonly length: number;
      readonly manufacturers: ReadonlyArray<string>;
      readonly maxAtmospheringSpeed: number | null;
      readonly model: string;
      readonly name: string;
      readonly passengers: number | null;
      readonly starshipClass: string;
    }>;
    readonly title: string;
    readonly vehicles: ReadonlyArray<{
      readonly cargoCapacity: number | null;
      readonly consumables: number | null;
      readonly costInCredits: number | null;
      readonly crew: number;
      readonly length: number | null;
      readonly manufacturers: ReadonlyArray<string> | null;
      readonly maxAtmospheringSpeed: number | null;
      readonly model: string;
      readonly name: string;
      readonly passengers: number | null;
      readonly vehicleClass: string;
    }>;
  };
};
export type pagesQuery = {
  response: pagesQuery$data;
  variables: pagesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "eyeColors",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hairColors",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "skinColors",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cargoCapacity",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "consumables",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "costInCredits",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "crew",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "length",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "manufacturers",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxAtmospheringSpeed",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "model",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "passengers",
  "storageKey": null
},
v13 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "film",
        "value": 4
      }
    ],
    "concreteType": "Film",
    "kind": "LinkedField",
    "name": "getFilm",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "director",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "characters",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthYear",
            "storageKey": null
          },
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gender",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "height",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mass",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Planet",
        "kind": "LinkedField",
        "name": "planets",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "climates",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "diameter",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gravity",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "orbitalPeriod",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "population",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rotationPeriod",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "surfaceWater",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "terrains",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Species",
        "kind": "LinkedField",
        "name": "species",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "averageHeight",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "averageLifespan",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "classification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "designation",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "language",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Starship",
        "kind": "LinkedField",
        "name": "starships",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hyperdriveRating",
            "storageKey": null
          },
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "MGLT",
            "storageKey": null
          },
          (v11/*: any*/),
          (v2/*: any*/),
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "starshipClass",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Vehicle",
        "kind": "LinkedField",
        "name": "vehicles",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v2/*: any*/),
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "vehicleClass",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "getFilm(film:4)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesQuery",
    "selections": (v13/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesQuery",
    "selections": (v13/*: any*/)
  },
  "params": {
    "cacheID": "06dc38a15c9795d284d9de4204031263",
    "id": null,
    "metadata": {},
    "name": "pagesQuery",
    "operationKind": "query",
    "text": "query pagesQuery {\n  getFilm(film: 4) {\n    director\n    title\n    characters {\n      birthYear\n      eyeColors\n      gender\n      hairColors\n      height\n      mass\n      name\n      skinColors\n    }\n    planets {\n      climates\n      diameter\n      gravity\n      name\n      orbitalPeriod\n      population\n      rotationPeriod\n      surfaceWater\n      terrains\n    }\n    species {\n      averageHeight\n      averageLifespan\n      classification\n      designation\n      eyeColors\n      hairColors\n      language\n      name\n      skinColors\n    }\n    starships {\n      cargoCapacity\n      consumables\n      costInCredits\n      crew\n      hyperdriveRating\n      length\n      manufacturers\n      maxAtmospheringSpeed\n      MGLT\n      model\n      name\n      passengers\n      starshipClass\n    }\n    vehicles {\n      cargoCapacity\n      consumables\n      costInCredits\n      crew\n      length\n      manufacturers\n      maxAtmospheringSpeed\n      model\n      name\n      passengers\n      vehicleClass\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "db8a3f3f4a5ac2226de37fa4d43cca6a";

export default node;
