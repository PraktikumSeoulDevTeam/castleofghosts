import {Topic} from './types';

function randomDate(): Date {
    return new Date(Date.now() - Math.floor(Math.random() * 10000000));
}

/**
 * Возвращает топики с задержкой 0.9с
 */
export function getTopics(): Promise<Topic[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '1',
                    author: 'Vasily Pupkin',
                    comments: [
                        {
                            author: 'Dan Abramov',
                            content: 'Eto pushka!',
                            createdAt: randomDate(),
                            id: '1'
                        }
                    ],
                    title: 'Ищем максимальную разницу между соседями. User-friendly-разбор задачи по алгоритмам',
                    content:
                        'Давайте поговорим про алгоритмы. Новички часто воспринимают их как что-то тяжёлое, сложное и непонятное, и отчасти это правда, но алгоритмы — это базис. А чем лучше вы знаете базис своей специальности, тем с большей вероятностью преуспеете в ней.',
                    createdAt: randomDate(),
                    rating: 140
                },
                {
                    id: '2',
                    author: 'Donald Prump',
                    comments: [],
                    title: 'Задачи, микрозадачи, очереди и планы',
                    content: `Предлагаю вашему вниманию перевод статьи «Tasks, microtasks, queues and schedules» Джейка Арчибальда (Jake Achibald), занимающего должность Developer Advocate for Google Chrome.
  
                  Когда я сказал своему коллеге Мэту Ганту, что подумываю о написании статьи об очерёдности микрозадач и порядке их исполнения внутри событийного цикла браузера, он сказал «Джейк, буду честен, я об этом читать не стану». Что ж, я всё же написал, поэтому откиньтесь на спинку кресла и давайте вместе в этом разберёмся, ладно?
                  
                  На самом деле, если вам будет проще посмотреть видео, есть замечательное выступление Филиппа Робертса на JSConf, которое рассказывает о событийном цикле – оно не покрывает микрозадачи, но в остальном является отличным вступлением в тему. В любом случае, погнали…`,
                    createdAt: randomDate(),
                    rating: -35
                },
                {
                    id: '3',
                    author: 'Greta Thunberg',
                    comments: [
                        {
                            id: '1',
                            author: 'Anonymous',
                            content: 'Thank you for your activity!',
                            createdAt: randomDate()
                        },
                        {
                            id: '2',
                            author: 'General Motors',
                            content: 'Ok, We try to do less pollution :)',
                            createdAt: randomDate()
                        },
                        {
                            id: '3',
                            author: 'Pavel Durov',
                            content:
                                'It must be very hard to some people knowing that a 17 years old girl is way smarter then them.',
                            createdAt: randomDate()
                        },
                        {
                            id: '4',
                            author: 'Anonymous',
                            content:
                                'Hi Greta. You are now 18 and and I am 50. I grew up in Texas USA. You are one of my heroes. I am very proud of you. When I was 18 I warned anyone that would listen that CO2 was a problem that needed to be addressed. Very few people listened and I got no recognition. Thank you.',
                            createdAt: randomDate()
                        },
                        {
                            id: '5',
                            author: 'Anonymous',
                            content: 'Thank you for your activity!',
                            createdAt: randomDate()
                        }
                    ],
                    title: `My name is Greta Thunberg`,
                    content: `And I am inviting you to be a part of the solution.
  
                    As #ParisAgreement turns 5, our leaders present their 'hopeful' distant hypothetical targets, 'net zero' loopholes and empty promises.
                    
                    
                    But the real hope comes from the people.`,
                    createdAt: new Date('2020-11-11'),
                    rating: 330
                },
                {
                    id: '4',
                    author: 'Anonymous',
                    comments: [],
                    title: 'Принципы SOLID, о которых должен знать каждый разработчик',
                    content:
                        'Объектно-ориентированное программирование принесло в разработку ПО новые подходы к проектированию приложений. В частности, ООП позволило программистам комбинировать сущности, объединённые некоей общей целью или функционалом, в отдельных классах, рассчитанных на решение самостоятельных задач и независимых от других частей приложения. Однако само по себе применение ООП не означает, что разработчик застрахован от возможности создания непонятного, запутанного кода, который тяжело поддерживать. Роберт Мартин, для того, чтобы помочь всем желающим разрабатывать качественные ООП-приложения, разработал пять принципов объектно-ориентированного программирования и проектирования, говоря о которых, с подачи Майкла Фэзерса, используют акроним SOLID.',
                    createdAt: randomDate(),
                    rating: 99
                }
            ]);
        }, 900);
    });
}
