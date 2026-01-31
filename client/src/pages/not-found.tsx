import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-muted px-4" dir="rtl">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-xl bg-destructive/10 border border-destructive/20 p-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">الصفحة غير موجودة</h1>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                الرابط الذي حاولت الوصول إليه غير صحيح أو تم نقله.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button onClick={() => setLocation("/")} data-testid="button-go-home">
              العودة للرئيسية
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              data-testid="button-go-back"
            >
              رجوع
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
