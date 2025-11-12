import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

const colorSchemes = [
  { 
    id: "default", 
    name: "Default", 
    colors: ["hsl(222 89% 55%)", "hsl(262 83% 58%)"],
    description: "Modern blue & purple"
  },
  { 
    id: "ocean", 
    name: "Ocean", 
    colors: ["hsl(199 89% 48%)", "hsl(177 70% 41%)"],
    description: "Calm blue & teal"
  },
  { 
    id: "sunset", 
    name: "Sunset", 
    colors: ["hsl(14 91% 58%)", "hsl(333 71% 51%)"],
    description: "Warm orange & pink"
  },
  { 
    id: "forest", 
    name: "Forest", 
    colors: ["hsl(142 76% 36%)", "hsl(171 77% 37%)"],
    description: "Natural green & emerald"
  },
  { 
    id: "monochrome", 
    name: "Monochrome", 
    colors: ["hsl(0 0% 20%)", "hsl(0 0% 40%)"],
    description: "Classic grayscale"
  },
];

export function ThemeCustomizer() {
  const [colorScheme, setColorScheme] = useState("default");

  useEffect(() => {
    const saved = localStorage.getItem("color-scheme");
    if (saved) {
      setColorScheme(saved);
      applyColorScheme(saved);
    }
  }, []);

  const applyColorScheme = (scheme: string) => {
    const root = document.documentElement;
    if (scheme === "default") {
      root.removeAttribute("data-color-scheme");
    } else {
      root.setAttribute("data-color-scheme", scheme);
    }
    localStorage.setItem("color-scheme", scheme);
    setColorScheme(scheme);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 rounded-xl transition-colors"
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Customize colors</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-1">Color Scheme</h4>
            <p className="text-xs text-muted-foreground">
              Choose your preferred color palette
            </p>
          </div>
          
          <div className="grid gap-2">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => applyColorScheme(scheme.id)}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors text-left"
              >
                <div className="flex gap-1 shrink-0">
                  <div
                    className="w-6 h-6 rounded-md shadow-sm"
                    style={{ backgroundColor: scheme.colors[0] }}
                  />
                  <div
                    className="w-6 h-6 rounded-md shadow-sm"
                    style={{ backgroundColor: scheme.colors[1] }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{scheme.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {scheme.description}
                  </div>
                </div>
                
                {colorScheme === scheme.id && (
                  <Check className="h-4 w-4 text-primary shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
