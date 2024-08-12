import ModelGnb from "./ModelGnb";
import ModelLnb from "./ModelLnb";

export default function modelLayout({
  params,
  children,
}: Readonly<{ params: { model: string }; children: React.ReactNode }>) {
  return (
    <main className="text-white relative">
      {/* 상단 가로 드롭다운 메뉴 */}
      <ModelGnb />

      {/* 좌측 LNB */}
      <ModelLnb params={params} />

      {/* 상세보기 ~ 결제하기까지 레이아웃 변경점 */}
      {children}
    </main>
  );
}
