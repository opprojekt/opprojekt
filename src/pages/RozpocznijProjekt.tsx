import { useMemo, useState } from "react"
import Layout from "@/components/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HouseScene, WindowStyle } from "@/components/constructor/HouseScene"
import { ArrowRight, Sparkles, Hammer, Ruler, Palette, RefreshCcw } from "lucide-react"

const FLOOR_OPTIONS = [1, 2, 3]
const WINDOW_STYLE_OPTIONS: { value: WindowStyle; label: string }[] = [
  { value: "modern", label: "Nowoczesne" },
  { value: "classic", label: "Klasyczne" },
]

const PRESETS = [
  {
    name: "Rodzinny dom",
    baseColor: "#f1f5f9",
    roofColor: "#b91c1c",
    accentColor: "#1d4ed8",
    floorCount: 2,
    hasGarage: true,
    windowStyle: "modern" as WindowStyle,
  },
  {
    name: "Nowoczesna willa",
    baseColor: "#e2e8f0",
    roofColor: "#0f172a",
    accentColor: "#22c55e",
    floorCount: 2,
    hasGarage: false,
    windowStyle: "modern" as WindowStyle,
  },
  {
    name: "Dom letniskowy",
    baseColor: "#fef3c7",
    roofColor: "#b45309",
    accentColor: "#e11d48",
    floorCount: 1,
    hasGarage: false,
    windowStyle: "classic" as WindowStyle,
  },
]

interface ProjectConfig {
  baseColor: string
  roofColor: string
  accentColor: string
  floorCount: number
  hasGarage: boolean
  windowStyle: WindowStyle
  plotSize: number
}

const INITIAL_CONFIG: ProjectConfig = {
  baseColor: "#f3f4f6",
  roofColor: "#7f1d1d",
  accentColor: "#0ea5e9",
  floorCount: 2,
  hasGarage: true,
  windowStyle: "modern",
  plotSize: 650,
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(value)

const RozpocznijProjekt = () => {
  const [config, setConfig] = useState<ProjectConfig>(INITIAL_CONFIG)

  const estimatedStats = useMemo(() => {
    const baseCost = 480000
    const floorCost = (config.floorCount - 1) * 160000
    const garageCost = config.hasGarage ? 78000 : 0
    const windowCost = config.windowStyle === "modern" ? 36000 : 24000
    const finishMultiplier = config.plotSize > 800 ? 1.08 : config.plotSize < 500 ? 0.94 : 1
    const totalCost = Math.round((baseCost + floorCost + garageCost + windowCost) * finishMultiplier)

    const usableArea = config.floorCount * 120 + (config.hasGarage ? 24 : 0)
    const timeline = 6 + config.floorCount * 3 + (config.hasGarage ? 1 : 0)

    return {
      totalCost,
      usableArea,
      timeline,
    }
  }, [config])

  const applyPreset = (presetName: string) => {
    const preset = PRESETS.find((item) => item.name === presetName)
    if (!preset) return

    setConfig((prev) => ({
      ...prev,
      ...preset,
    }))
  }

  const resetConfig = () => setConfig(INITIAL_CONFIG)

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative container mx-auto px-4 py-24 text-white">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <span className="inline-flex w-fit items-center rounded-full border border-white/40 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
              Nowość
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Rozpocznij projekt swojego wymarzonego domu w 3D
            </h1>
            <p className="text-lg text-white/90">
              Zmieniaj kolory, konfiguracje i układ bryły budynku w czasie rzeczywistym. Przełączaj się między
              stylami, dodawaj garaż i oceniaj orientacyjny koszt inwestycji.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4" /> Rendering w czasie rzeczywistym
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">
                <Ruler className="w-4 h-4" /> Adaptacja do działki
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 px-3 py-1.5 rounded-full">
                <Palette className="w-4 h-4" /> Spersonalizowana kolorystyka
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">
            <Card className="glass-card border-0 shadow-soft backdrop-blur">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-heading flex items-center gap-3">
                  <Hammer className="w-6 h-6 text-primary" /> Kreator bryły domu
                </CardTitle>
                <CardDescription>
                  Manipuluj parametrami, aby dopasować bryłę, kolorystykę i dodatki do swoich potrzeb.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-[1.7fr_1fr] gap-6">
                  <div className="rounded-2xl border border-border bg-muted/10 p-2">
                    <div className="h-[420px] sm:h-[460px]">
                      <HouseScene {...config} />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Kolor elewacji</Label>
                        <div className="flex items-center gap-3">
                          <Input
                            type="color"
                            value={config.baseColor}
                            onChange={(event) =>
                              setConfig((prev) => ({ ...prev, baseColor: event.target.value }))
                            }
                            className="h-10 w-16 p-1 cursor-pointer"
                          />
                          <Input
                            value={config.baseColor}
                            onChange={(event) =>
                              setConfig((prev) => ({ ...prev, baseColor: event.target.value }))
                            }
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Kolor dachu</Label>
                        <div className="flex items-center gap-3">
                          <Input
                            type="color"
                            value={config.roofColor}
                            onChange={(event) =>
                              setConfig((prev) => ({ ...prev, roofColor: event.target.value }))
                            }
                            className="h-10 w-16 p-1 cursor-pointer"
                          />
                          <Input
                            value={config.roofColor}
                            onChange={(event) =>
                              setConfig((prev) => ({ ...prev, roofColor: event.target.value }))
                            }
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs uppercase tracking-wide text-muted-foreground">Kolor akcentów</Label>
                        <div className="flex items-center gap-3">
                          <Input
                            type="color"
                            value={config.accentColor}
                            onChange={(event) =>
                              setConfig((prev) => ({ ...prev, accentColor: event.target.value }))
                            }
                            className="h-10 w-16 p-1 cursor-pointer"
                          />
                          <Input
                            value={config.accentColor}
                            onChange={(event) =>
                              setConfig((prev) => ({ ...prev, accentColor: event.target.value }))
                            }
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <Label>Poziomy budynku</Label>
                        <Select
                          value={String(config.floorCount)}
                          onValueChange={(value) =>
                            setConfig((prev) => ({ ...prev, floorCount: Number(value) }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Wybierz liczbę kondygnacji" />
                          </SelectTrigger>
                          <SelectContent>
                            {FLOOR_OPTIONS.map((option) => (
                              <SelectItem key={option} value={String(option)}>
                                {option} {option === 1 ? "kondygnacja" : "kondygnacje"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label>Styl okien</Label>
                        <Select
                          value={config.windowStyle}
                          onValueChange={(value) =>
                            setConfig((prev) => ({ ...prev, windowStyle: value as WindowStyle }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Styl wykończenia" />
                          </SelectTrigger>
                          <SelectContent>
                            {WINDOW_STYLE_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between space-x-3 rounded-lg border border-border bg-background/40 px-4 py-3">
                        <div className="space-y-1">
                          <Label className="text-sm font-semibold text-foreground">Garaż</Label>
                          <p className="text-xs text-muted-foreground">
                            Opcjonalne miejsce postojowe zintegrowane z bryłą.
                          </p>
                        </div>
                        <Checkbox
                          checked={config.hasGarage}
                          onCheckedChange={(checked) =>
                            setConfig((prev) => ({ ...prev, hasGarage: checked === true }))
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Wielkość działki (m²)</Label>
                        <Slider
                          value={[config.plotSize]}
                          onValueChange={([value]) =>
                            setConfig((prev) => ({ ...prev, plotSize: value }))
                          }
                          min={300}
                          max={1200}
                          step={10}
                        />
                        <div className="text-sm text-muted-foreground">
                          Aktualnie: <span className="font-medium text-foreground">{config.plotSize} m²</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {PRESETS.map((preset) => (
                        <Button
                          key={preset.name}
                          variant="outline"
                          className="flex-1 min-w-[160px]"
                          onClick={() => applyPreset(preset.name)}
                        >
                          {preset.name}
                        </Button>
                      ))}
                      <Button variant="ghost" onClick={resetConfig} className="flex items-center gap-2">
                        <RefreshCcw className="w-4 h-4" /> Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 glass-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Podsumowanie inwestycji</CardTitle>
                  <CardDescription>
                    Orientacyjne dane na podstawie wprowadzonych ustawień. Dokładna wycena powstanie po
                    konsultacji z naszym zespołem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-xl border border-border bg-muted/20 p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm uppercase tracking-wide text-muted-foreground">Szacunkowy koszt</span>
                      <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-foreground/80">
                        netto
                      </span>
                    </div>
                    <p className="text-3xl font-heading font-semibold">
                      {formatCurrency(estimatedStats.totalCost)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ceny mają charakter poglądowy i mogą się różnić w zależności od wykończenia i lokalizacji.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                      <p className="text-muted-foreground">Powierzchnia użytkowa</p>
                      <p className="text-xl font-semibold text-foreground">~ {estimatedStats.usableArea} m²</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                      <p className="text-muted-foreground">Czas realizacji</p>
                      <p className="text-xl font-semibold text-foreground">{estimatedStats.timeline} mies.</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                      <p className="text-muted-foreground">Garaż</p>
                      <p className="text-xl font-semibold text-foreground">
                        {config.hasGarage ? "Tak" : "Opcjonalnie"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Dedykowany architekt</p>
                        <p className="text-muted-foreground">Otrzymasz indywidualną konsultację z naszym specjalistą.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Ruler className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Analiza działki</p>
                        <p className="text-muted-foreground">Sprawdzimy możliwości zabudowy Twojej nieruchomości.</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full hero-gradient text-white shadow-soft hover:shadow-medium flex items-center justify-center gap-2">
                    Umów konsultację
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-dashed border-primary/30 bg-primary/5">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl font-heading">Jak wygląda dalszy proces?</CardTitle>
                  <CardDescription>Kilka kroków dzieli Cię od projektu Twojego domu.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-primary">1. Konsultacja projektowa</p>
                    <p className="text-muted-foreground">Omawiamy Twoje potrzeby, budżet i wymagania funkcjonalne.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">2. Koncepcja i wizualizacja</p>
                    <p className="text-muted-foreground">Tworzymy wizualizacje 3D oraz dopracowujemy bryłę budynku.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">3. Kompletny projekt wykonawczy</p>
                    <p className="text-muted-foreground">Otrzymujesz pełen zestaw dokumentacji gotowej do realizacji.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RozpocznijProjekt
