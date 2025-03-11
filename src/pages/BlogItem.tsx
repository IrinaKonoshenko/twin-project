import { BlogCard } from "../components/BlogCard";
import { Button } from "../components/Button";
import { Icon } from "../components/icon/Icon";
import { Input } from "../components/Input";
import { Typography } from "../components/Typography";

const blogList: {
  img: string;
  title: string;
  description: string;
  createdDate: string;
  status?: "active" | "draft";
}[] = [
  {
    img: "/images/dress.jpg",
    title: "Повышаем продажи подключая корзину с сайта в диалог",
    description:
      "Рассказываем зачем это нужно. Добавляем пользователей, создаём им роли и распределяем права.",
    createdDate: new Date(Date.UTC(2025, 1, 26)).toISOString(),
    status: "active",
  },
  {
    img: "/images/peoples.jpg",
    title: "Роли пользователей",
    description:
      "Рассказываем зачем это нужно. Добавляем пользователей, создаём им роли и распределяем права.",
    createdDate: new Date(Date.UTC(2025, 1, 25)).toISOString(),
    status: "draft",
  },
  {
    img: "/images/robot.jpg",
    title: "Ваш первый робот",
    description: "Узнайте, как создать вашего нового сотрудника с нуля.",
    createdDate: new Date(Date.UTC(2025, 1, 15)).toISOString(),
    status: "active",
  },
];

export default function BlogItem() {
  return (
    <div className="mt-21">
      <div className="max-w-[1090px] mx-auto">
        <a href="/blog" className="pt-6 flex gap-2 items-center">
          <div className="text-secondary">
            <Icon icon="arrowLeft" />
          </div>
          <Typography className="text-header5 text-secondary">Назад</Typography>
        </a>
        <div className="py-10 flex gap-[137px] items-start">
          <div className="flex-grow flex flex-col gap-10">
            <DescriptionBlock />
            <div className="w-full h-auto overflow-hidden rounded-lg">
              <img src="/images/taxi.jpg" alt="" />
            </div>
            <div className="html">
              <h3>Доход водителя зависит от эффективности</h3>
              <p>
                У «Яндекс.Такси», как и у любого сервиса по заказу поездок
                онлайн, есть две категории пользователей — водители,
                подключенные к платформе, и пассажиры, которых они везут. Для
                тех и других важно, чтобы сервис был надёжным, быстрым и
                доступным.
              </p>
              <p>
                Разница лишь в том, что для водителей это не просто приложение,
                а источник дохода — либо основного, либо дополнительного.
                Поэтому для них важно как можно больше времени проводить с
                клиентом — чем меньше он ездит «в холостую», тем выше его доход
                за смену.
              </p>
              <p>
                Сегодня водитель даже в крупных городах находится с пассажиром
                не больше двух третей рабочего времени. Это как раз то время,
                когда он зарабатывает. Остальную треть смены суммарно он ждёт
                заказ или едет до клиента.
              </p>
              <p>
                Для повышения доходов водителя без увеличения времени его работы
                на линии, мы оптимизируем параметр эффективности — это доля от
                времени на смене, которое водитель проводит непосредственно с
                пассажиром.
              </p>
            </div>
            <div className="w-full h-auto overflow-hidden rounded-lg">
              <img src="/images/maptaxi1.jpg" alt="" />
            </div>
            <div className="html">
              <h3>Как можно помочь водителям принимать решения</h3>
              <p>
                В подобных ситуациях на помощь водителям теперь приходит наш
                новый алгоритм. Он находит персональный оптимальный маршрут до
                того района, где его с наибольшей вероятностью ожидает следующий
                заказ. Мы называем этот алгоритм «Проводником».
              </p>
              <p>
                Чтобы понять, как оптимизировать перемещения водителей, мы
                построили виртуальный город и перенесли туда настоящие
                алгоритмы, которые используются для распределения машин и
                расчёта стоимости проезда в нашем сервисе.
              </p>
              <p>
                «Жизнь» в город привнесли тысячи виртуальных пассажиров: каждый
                из них перемещается по своим делам — в точности, как это делают
                настоящие горожане.
              </p>
              <p>
                При помощи команды машинного обучения мы смогли воссоздать
                поведение обычного водителя, который опирается на свой опыт
                перемещения по городу, и доступную на текущий момент информацию
                от сервиса — такого, как «Яндекс.Такси». Чем больше дней такой
                водитель работает, тем больше знаний о городе накапливает, тем
                более качественными становятся его решения и тем больше он
                зарабатывает в конце своей виртуальной смены.
              </p>
            </div>
            <div className="bg-[#F1EFF5] py-10 px-12 flex flex-col gap-6 rounded-lg">
              <h2 className="text-header2">
                Хотите автоматизировать коммуникации c клиентами?
              </h2>
              <Typography>
                Twin поможет вам с оптимизацией процессов и построением
                омниканальных коммуникаций. Оставьте заявку, и мы перезвоним.
              </Typography>
              <div>
                <Button
                  text="Оставить заявку"
                  borderStyle="bold"
                  color="blue"
                  rounded
                ></Button>
              </div>
            </div>
            <div className="html">
              <p>
                Затем мы добавили в виртуальный город водителя-профессионала. Он
                знает о городе всё: где лучшие заказы, когда будет повышенный
                спрос, в каком районе он возникнет, как долго продлится, как
                быстрее всего к нему доехать. Как правило, такой водитель
                зарабатывает значительно больше, чем первый, за то же время,
                проведённое на линии.
              </p>
              <p>
                Мы повторили такую симуляцию для нескольких реальных городов в
                разное время года и получили огромный массив данных — с их
                помощью лучше поняли разницу в заработке «обычного» водителя и
                «оракула», который знает всё наперёд и придерживается
                оптимальной стратегии перемещения.
              </p>
              <p>
                Оставалось разработать и протестировать такую рекомендательную
                систему, которая позволяла бы обычным водителям уже в настоящем
                городе достичь такой же эффективности, как их образцовые коллеги
                в симуляции.
              </p>
            </div>
            <div className="w-full h-auto overflow-hidden rounded-lg">
              <img src="/images/maptaxi2.jpg" alt="" />
            </div>
            <div className="html">
              <h3>Как работает алгоритм распределения водителей</h3>
              <p>
                Разбив город на тысячи маленьких районов, мы собираем данные о
                количестве пользователей в них на данный момент, смотрим на
                исторические показатели, получаем сведения о загрузке дорог и о
                предстоящих событиях — например, массовых мероприятиях. Так мы
                прогнозируем спрос и рассчитываем необходимое число такси,
                которые смогут его удовлетворить.
              </p>
              <p>
                Определившись с объемом спроса на ближайшие несколько часов, нам
                остается найти всех водителей неподалеку и порекомендовать им
                переместиться оптимальным способом между районами.
              </p>
              <p>
                Например, мы знаем, что сегодня после 19 часов в Хамовниках
                такси понадобится примерно 150 пользователям. Неподалеку свои
                заказы завершат 70 водителей, так что нам остается найти еще 80,
                для того чтобы удовлетворить спрос и не допустить повышающих
                коэффициентов.
              </p>
              <p>
                Дальше в дело вступает математика: чтобы расчёты были точными,
                нужно учесть сразу несколько вводных. Например, что водитель не
                обязан следовать нашим рекомендациям: если мы отправим
                предложение «Проводника» 80 водителям поблизости, не факт, что
                все они согласятся.
              </p>
              <p>
                Помимо этого, нужно максимально точно предсказать, скольким
                водителям это предложение отправить, чтобы в точное время и в
                нужном месте оказалось требуемое количество готовых к заказам
                такси.
              </p>
              <p>
                А также учитывать расстояние, которое проедет водитель, чтобы
                минимизировать расходы на поездку вхолостую и выбрать только те
                предложения, которые будут для него выгодны.
              </p>
              <p>
                Просчитав все эти сценарии, мы высылаем предложение нужному
                количеству водителей. Когда они начинают двигаться в сторону
                указанной точки, мы стараемся найти им заказы по пути. Это
                заказы, которые они могут взять, не слишком отклоняясь от
                маршрута, и заработать деньги даже за эту поездку.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <Typography className="text-header4">
              Хотите быть в курсе публикаций?
            </Typography>
            <Input
              label="Ваша почта"
              placeholder="Email"
              value=""
              className="w-[310px]"
            />
            <div>
              <Button
                text="Подписаться"
                borderStyle="thin"
                color="blue"
              ></Button>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-10 flex flex-col gap-6">
          <Typography className="text-header3">Поделиться</Typography>
          <div className="flex gap-6">
            <div className="flex gap-2">
              <Button
                text="+79"
                borderStyle="thin"
                color="blue"
                leftElement={<Icon icon="telegram" />}
              ></Button>
              <Button
                text="+214"
                borderStyle="thin"
                color="blue"
                leftElement={<Icon icon="vk" />}
              ></Button>
              <Button
                text="+115"
                borderStyle="thin"
                color="blue"
                leftElement={<Icon icon="odnoklassniki" />}
              ></Button>
            </div>
            <div className="flex gap-2">
              <Button
                text="Email"
                borderStyle="thin"
                color="blue"
                leftElement={<Icon icon="mail" />}
              ></Button>
              <Button
                text="Ссылка"
                borderStyle="thin"
                color="blue"
                leftElement={<Icon icon="share" />}
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <SimilarArticles />
    </div>
  );
}

function HeaderInfo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2 items-center">
        <Icon icon="eye" />
        <Typography className="text-very-small text-input-label">
          2 856 просмотров
        </Typography>
      </div>
      <div className="flex gap-2 items-center">
        <Typography className="text-very-small text-input-label">от</Typography>
        <Typography className="text-very-small text-secondary">
          Александр Селлеров
        </Typography>
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-input-label flex justify-center items-center">
          <Icon icon="calendar" />
        </div>
        <Typography className="text-very-small text-input-label">
          17 сентября 2019
        </Typography>
      </div>
    </div>
  );
}

function DescriptionBlock() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <HeaderInfo />
        <Typography className="text-header1">
          Как алгоритмы «Яндекс.Такси» распределяют автомобили в городе
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography className="text-description">
          Несколько месяцев назад «Яндекс.Такси» разработало и запустило
          систему, которая предлагает каждому водителю, только что завершившему
          поездку, индивидуальный маршрут, предсказывая спрос и эффективно
          распределяя все автомобили по городу. Это позволило водителям,
          подключенным к сервису, как минимум на 20% увеличить свой ежедневный
          доход.
        </Typography>
        <div className="flex gap-2 items-center">
          <Icon icon="time" size="16" />
          <Typography className="text-very-small text-input-label">
            12 минут чтения
          </Typography>
        </div>
      </div>
    </div>
  );
}

function SimilarArticles() {
  return (
    <div className="pb-20 px-[65px] bg-[#F8F7FA]">
      <div className="py-6 flex justify-between items-center">
        <Typography className="text-header3">Похожие статьи</Typography>
        <div>
          <Button
            text="Еще похожие статьи"
            borderStyle="no"
            color="blue"
            rightElement={<Icon icon="arrowRight" />}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {blogList.map((items, index) => (
          <BlogCard
            key={index}
            createdDate={items.createdDate}
            img={items.img}
            description={items.description}
            title={items.title}
            status={items.status}
          />
        ))}
      </div>
    </div>
  );
}
