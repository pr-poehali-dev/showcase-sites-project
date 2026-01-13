import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface CalculatorResult {
  material: string;
  toothPitch: string;
  bladeWidth: string;
  bladeThickness: string;
  recommendation: string;
}

const SawCalculator = () => {
  const [material, setMaterial] = useState('');
  const [thickness, setThickness] = useState('');
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculateBlade = () => {
    if (!material || !thickness) return;

    let toothPitch = '';
    let bladeWidth = '';
    let bladeThickness = '';
    let recommendation = '';

    const thicknessNum = parseFloat(thickness);

    switch (material) {
      case 'wood':
        if (thicknessNum <= 50) {
          toothPitch = '4-6 TPI';
          bladeWidth = '15-20 мм';
          bladeThickness = '0.6 мм';
          recommendation = 'Для тонкой древесины рекомендуется полотно с частым зубом для чистого реза';
        } else if (thicknessNum <= 150) {
          toothPitch = '3-4 TPI';
          bladeWidth = '20-30 мм';
          bladeThickness = '0.7 мм';
          recommendation = 'Универсальное полотно для пиления древесины средней толщины';
        } else {
          toothPitch = '2-3 TPI';
          bladeWidth = '30-40 мм';
          bladeThickness = '0.9 мм';
          recommendation = 'Для толстых брусьев нужно полотно с редким зубом и увеличенной шириной';
        }
        break;

      case 'metal':
        if (thicknessNum <= 10) {
          toothPitch = '10-14 TPI';
          bladeWidth = '13-20 мм';
          bladeThickness = '0.65 мм';
          recommendation = 'Для тонкого металла используйте полотно с частым зубом, биметаллическое';
        } else if (thicknessNum <= 50) {
          toothPitch = '6-10 TPI';
          bladeWidth = '20-27 мм';
          bladeThickness = '0.9 мм';
          recommendation = 'Стандартное биметаллическое полотно для металла средней толщины';
        } else {
          toothPitch = '4-6 TPI';
          bladeWidth = '27-34 мм';
          bladeThickness = '1.1 мм';
          recommendation = 'Для толстого металла требуется усиленное биметаллическое полотно';
        }
        break;

      case 'meat':
        if (thicknessNum <= 100) {
          toothPitch = '4-6 TPI';
          bladeWidth = '16-20 мм';
          bladeThickness = '0.5 мм';
          recommendation = 'Полотно из нержавеющей стали с покрытием для пищевой промышленности';
        } else if (thicknessNum <= 250) {
          toothPitch = '3-4 TPI';
          bladeWidth = '20-25 мм';
          bladeThickness = '0.6 мм';
          recommendation = 'Универсальное полотно для мяса и костей средней толщины';
        } else {
          toothPitch = '2-3 TPI';
          bladeWidth = '25-32 мм';
          bladeThickness = '0.7 мм';
          recommendation = 'Усиленное полотно для распила крупных туш с костями';
        }
        break;

      case 'bones':
        if (thicknessNum <= 50) {
          toothPitch = '6-8 TPI';
          bladeWidth = '16-20 мм';
          bladeThickness = '0.6 мм';
          recommendation = 'Полотно с закалённым зубом для пиления мелких костей';
        } else if (thicknessNum <= 150) {
          toothPitch = '4-6 TPI';
          bladeWidth = '20-27 мм';
          bladeThickness = '0.8 мм';
          recommendation = 'Усиленное полотно для костей средней толщины, нержавеющая сталь';
        } else {
          toothPitch = '3-4 TPI';
          bladeWidth = '27-35 мм';
          bladeThickness = '0.9 мм';
          recommendation = 'Специальное усиленное полотно для крупных костей с повышенной прочностью';
        }
        break;
    }

    setResult({
      material: getMaterialName(material),
      toothPitch,
      bladeWidth,
      bladeThickness,
      recommendation
    });
  };

  const getMaterialName = (mat: string) => {
    const names: { [key: string]: string } = {
      wood: 'Древесина',
      metal: 'Металл',
      meat: 'Мясо',
      bones: 'Кости'
    };
    return names[mat] || '';
  };

  const resetCalculator = () => {
    setMaterial('');
    setThickness('');
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-2">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon name="Calculator" size={32} className="text-accent" />
            </div>
          </div>
          <CardTitle className="text-3xl">Калькулятор подбора пильного полотна</CardTitle>
          <CardDescription className="text-base">
            Подберите оптимальное пильное полотно для вашей задачи
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="material" className="text-base font-semibold mb-3 block">
                  Материал для распила
                </Label>
                <Select value={material} onValueChange={setMaterial}>
                  <SelectTrigger id="material" className="h-12">
                    <SelectValue placeholder="Выберите материал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wood">
                      <div className="flex items-center gap-2">
                        <Icon name="TreePine" size={18} />
                        <span>Древесина</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="metal">
                      <div className="flex items-center gap-2">
                        <Icon name="Wrench" size={18} />
                        <span>Металл</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="meat">
                      <div className="flex items-center gap-2">
                        <Icon name="Beef" size={18} />
                        <span>Мясо</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="bones">
                      <div className="flex items-center gap-2">
                        <Icon name="Bone" size={18} />
                        <span>Кости</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="thickness" className="text-base font-semibold mb-3 block">
                  Толщина материала (мм)
                </Label>
                <Select value={thickness} onValueChange={setThickness}>
                  <SelectTrigger id="thickness" className="h-12">
                    <SelectValue placeholder="Выберите толщину" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">До 20 мм</SelectItem>
                    <SelectItem value="50">20-50 мм</SelectItem>
                    <SelectItem value="100">50-100 мм</SelectItem>
                    <SelectItem value="150">100-150 мм</SelectItem>
                    <SelectItem value="200">150-200 мм</SelectItem>
                    <SelectItem value="300">Более 200 мм</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateBlade} 
                  disabled={!material || !thickness}
                  className="flex-1 h-12 bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать полотно
                </Button>
                {result && (
                  <Button 
                    onClick={resetCalculator} 
                    variant="outline"
                    className="h-12"
                    size="lg"
                  >
                    <Icon name="RotateCcw" size={20} />
                  </Button>
                )}
              </div>
            </div>

            <div>
              {result ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-accent/5 rounded-lg p-6 border-2 border-accent/20">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Icon name="CheckCircle" size={24} className="text-accent" />
                      Рекомендация
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Материал:</span>
                        <span className="font-semibold">{result.material}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Шаг зуба:</span>
                        <span className="font-semibold">{result.toothPitch}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Ширина полотна:</span>
                        <span className="font-semibold">{result.bladeWidth}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Толщина:</span>
                        <span className="font-semibold">{result.bladeThickness}</span>
                      </div>
                    </div>
                  </div>
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-1" />
                        <p className="text-sm leading-relaxed">{result.recommendation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                  <Icon name="Scissors" size={48} className="text-muted-foreground/40 mb-4" />
                  <p className="text-muted-foreground">
                    Выберите материал и толщину, чтобы получить рекомендацию по подбору пильного полотна
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SawCalculator;
