/* import {
  ProfileSolution,
  CounterSolution,
  SearchDependencySolution,
  ProductListSolution,
  ProductListMemoSolution,
  StateCounterSolution,
  VisibleProductsMemoSolution,
  ToggleExampleSolution,
  SearchBoxSolution,
  type Product,
} from "./components/HooksSolutions";
import {  FormReducerSolution,
  ThemeProviderSolution,
  ThemeButtonSolution} from "./components/StateSolutions" */

import { ProfileSolution, CounterSolution, SearchDependencySolution, StateCounterSolution, ProductListSolution, ProductListMemoSolution, ToggleExampleSolution, SearchBoxSolution, ThemeProvidersolution, ThemeButtonSolution } from "./components/HooksSolutions";

const products: Product[] = [
  { id: 1, name: "Notebook", price: 25000 },
  { id: 2, name: "Myš", price: 500 },
  { id: 3, name: "Monitor", price: 6000 },
  { id: 4, name: "Klávesnice", price: 1500 },
];

function App() {
  return (
    <>
       <h1>HooksSolutions – ukázky řešení</h1>

      <section>
        <h2>Miniúkol 1 – Rules of Hooks</h2>

        <h3>Bez userId</h3>
        <ProfileSolution />

        <h3>S userId</h3>
        <ProfileSolution userId="123" />
      </section>

      <section>
        <h2>Miniúkol 2 – Stale state
        </h2>
        <CounterSolution />
      </section>

      <section>
        <h2>Miniúkol 3 – Dependency array</h2>
        <SearchDependencySolution query="React Hooks" />
      </section>

      <section>
        <h2>Miniúkol 4 – Zbytečný useEffect</h2>
        <ProductListSolution products={products} query="o" />
      </section>

      <section>
        <h2>Miniúkol 4 – Varianta s useMemo</h2>
        <ProductListMemoSolution products={products} query="o" />
      </section>

      <section>
        <h2>Miniúkol 5 – State vs. ref</h2>
        <StateCounterSolution />
      </section>

      {/*<section>
        <h2>Miniúkol 6 – Smysluplná memoizace</h2>
        <VisibleProductsMemoSolution products={products} query="o" />
      </section>
*/}
      <section>
        <h2>Miniúkol 7 – useToggle</h2>
        <ToggleExampleSolution />
      </section>

      <section>
        <h2>Miniúkol 8 – useDebounce</h2>
        <SearchBoxSolution />
      </section>
{/* 
      <section>
        <h2>Miniúkol 9 – useReducer</h2>
        <FormReducerSolution />
      </section>*/}
{
      <section>
        <h2>Miniúkol 10 – useContext</h2>

        <ThemeProviderSolution>
          <ThemeButtonSolution />
        </ThemeProviderSolution>
      </section>}
    </>
  );
}

export default App;
