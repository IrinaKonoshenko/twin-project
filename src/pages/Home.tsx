import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Главная страница
      </h1>
      <p className="text-lg text-gray-600 mb-6">Выберите страницу:</p>

      <nav className="flex flex-col gap-4">
        <Link to="/blog" className="text-blue-500 hover:underline">
          Блог
        </Link>
        <Link to="/catalog" className="text-blue-500 hover:underline">
          Каталог
        </Link>
        <Link to="/bot" className="text-blue-500 hover:underline">
          Бот
        </Link>
        <Link to="/reviews" className="text-blue-500 hover:underline">
          Отзывы
        </Link>
        <Link to="/reviews/new" className="text-blue-500 hover:underline">
          Оставить отзыв
        </Link>
        <Link to="/pricing" className="text-blue-500 hover:underline">
          Стоимость
        </Link>
        <Link to="/testing" className="text-blue-500 hover:underline">
          Запуск тестирования
        </Link>
        <Link to="/test" className="text-blue-500 hover:underline">
          Тест
        </Link>
      </nav>
    </div>
  );
}
