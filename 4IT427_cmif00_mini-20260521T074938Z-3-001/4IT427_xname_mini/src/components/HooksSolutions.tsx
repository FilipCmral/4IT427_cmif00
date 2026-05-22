import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

export function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  console.log('1: Render Component');

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Zvýšit count
      </button>

      <button onClick={() => setVisible((prev) => !prev)}>
        Zobrazit / skrýt dítě
      </button>

      <p>Count: {count}</p>

      {visible && <Child count={count} />}
    </>
  );
}

function Child({ count }: { count: number }) {
  console.log('2: Render Child');

  useEffect(() => {
    console.log('3: Child mount');

    return () => {
      console.log('4: Child unmount');
    };
  }, []);

  useEffect(() => {
    console.log('5: Count se změnil:', count);
  }, [count]);

  return <p>Child count: {count}</p>;
}

// Miniúkol 1 – Rules of Hooks
type ProfileSolutionProps = {
  userId?: string;
};
export function ProfileSolution() {

  return (
    <>

    </>
  );
}

// Miniúkol 2 – Stale state
export function CounterSolution() {

  return <button ></button>;
}

// Miniúkol 3 – Dependency array
export function SearchDependencySolution({ query }: { query: string }) {
  useEffect(() => {
    console.log('Searching for', query);
  }, [query]);

  return <div>{query}</div>;
}

// Miniúkol 4 – Zbytečný useEffect
export type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
  query: string;
};

function List({ items }: { items: Product[] }) {
  return (
    <ul>

    </ul>
  );
}

export function ProductListSolution({ products, query }: ProductListProps) {
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  return <List items={filteredProducts} />;
}

// Varianta, pokud je výpočet opravdu dražší nebo seznam velký.
 export function ProductListMemoSolution({ products, query }: ProductListProps) {
  const visibleProducts = useMemo(() => {
    return products
      .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.price - b.price);
  }, [products, query]);

  return <List items={visibleProducts} />;
} 

// Miniúkol 5 – State vs. ref
export function StateCounterSolution() {
  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);

  function handleClick() {
    countRef.current += 1;
    setCountState((countState) => countState + 1);
    console.log(countRef.current);
  }

  return (
    <>
      <button onClick={handleClick}>+1</button>
      <p>{countState}</p>
    </>
  );
}

// Miniúkol 6 – Smysluplná memoizace


// Miniúkol 7 – useToggle
function useToggle(initialValue = false) {
  // TODO: doplňte useState
  // TODO: doplňte funkci toggle
  // TODO: vraťte [value, toggle] as const
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle] as const;
}

export function ToggleExampleSolution() {
  // TODO: použijte useToggle
  const [isToggled, toggle] = useToggle(false);

  return <button onClick={toggle}>
    {isToggled ? "Open" : "Close"}
  </button>;
}

// Miniúkol 8 – useDebounce
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(() => {
          const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
      
          return () => clearTimeout(timeoutId);
        }, [value, delay]);

  return debouncedValue;
}

export function SearchBoxSolution() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

   useEffect(() => {
          if (debouncedQuery) {
            console.log('API call:', debouncedQuery);
          }
        }, [debouncedQuery]);

  return <input value={query} onChange={(event) => setQuery(event.target.value)} />;
}

type Theme = 'light' | 'dark';
type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    theme: 'light',
    toggleTheme: () => {},
  });

export function ThemeProvidersolution({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggle = () => setTheme((t) => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeButtonSolution() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Aktuální téma: {theme}</button>;
}