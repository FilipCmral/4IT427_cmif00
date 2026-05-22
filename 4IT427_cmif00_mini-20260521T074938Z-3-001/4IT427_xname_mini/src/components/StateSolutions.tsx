import {
  createContext,
  useContext,
  useReducer,
  useState,
  type ReactNode,
} from 'react';

// Miniúkol 9 – useReducer + reset
export type FormState = {
  name: string;
  email: string;
  isSubmitting: boolean;
};


export type FormAction =
  | { type: 'setName'; value: string }
  | { type: 'setEmail'; value: string }
  | { type: 'submit' }
  | { type: 'done' };

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.value };
    case 'setEmail':
      return { ...state, email: action.value };
    case 'submit':
      return { ...state, isSubmitting: true };
    case 'done':
      return { ...state, isSubmitting: false };
    default:
      return state;
  }
}

export function FormReducerSolution() {
   // const [state, dispatch] = useReducer(formReducer.....);

  return (
    <form>
{/*       <input
        value={state.name}
        placeholder="Jméno"
        onChange={(event) => dispatch({ type: 'setName', value: event.target.value })}
      />
      <input
        value={state.email}
        placeholder="E-mail"
        onChange={(event) => dispatch({ type: 'setEmail', value: event.target.value })}
      />
      <button type="button" onClick={() => dispatch({ type: 'submit' })}>
        Odeslat
      </button>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <p>{state.isSubmitting ? 'Odesílám…' : 'Připraveno'}</p> */}
    </form>
  );
}

// Miniúkol 10 – useContext
export type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProviderSolution({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme() {
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {

  return // context;
}

export function ThemeButtonSolution() {

  return // <button onClick={toggleTheme}>Aktuální theme: {theme}</button>;
}

export default function SolutionsOverview() {
  return (
    <div>
      <h1>Hooks – řešení miniúkolů</h1>
      <p>Tento soubor slouží jako reference.</p>
    </div>
  );
}
