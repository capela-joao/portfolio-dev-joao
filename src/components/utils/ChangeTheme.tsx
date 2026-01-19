import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ChangeTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) {
    return <span aria-hidden className="inline-block h-9 w-9" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md 
      cursor-pointer hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ChangeTheme;
