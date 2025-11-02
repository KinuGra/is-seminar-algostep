export default function HomeHeader() {
  return (
    <>
      <header>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 rounded-lg p-2 text-xl">💻</div>
          <div>
            <h1 className="text-2xl font-bold">プログラミング学習</h1>
            <p className="text-gray-600 text-sm">アルゴリズムとデータ構造を学ぼう</p>
          </div>
        </div>
      </header>
    </>
  );
}
