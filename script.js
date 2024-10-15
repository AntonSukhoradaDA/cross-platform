const planets = [
    {
        name: 'Меркурій',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
        description: 'Найменша планета Сонячної системи та найближча до Сонця.',

        details: {
            temperature: 'Вдень до 430°C, вночі до -180°C',
            mass: '3.3011×10^23 кг',
            distance: '57.9 млн км від Сонця',
            discovery: 'Відома з давнини',
            atmosphere: 'Відсутня',
            satellites: 'Немає',
            missions: ['Mariner 10', 'MESSENGER', 'BepiColombo']
        }
    },
    {
        name: 'Венера',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
        description: 'Друга планета від Сонця, відома своєю густою атмосферою.',
        details: {
            temperature: 'Середня близько 464°C',
            mass: '4.8675×10^24 кг',
            distance: '108.2 млн км від Сонця',
            discovery: 'Відома з давнини',
            atmosphere: 'Вуглекислий газ, азот',
            satellites: 'Немає',
            missions: ['Venera', 'Magellan', 'Venus Express', 'Akatsuki']
        }
    },
    {
        name: 'Земля',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg'
        ,
        description: 'Наша рідна планета, єдина відома з життям.',
        details: {
            temperature: 'Середня близько 15°C',
            mass: '5.97237×10^24 кг',
            distance: '149.6 млн км від Сонця',
            discovery: 'Не застосовується',
            atmosphere: 'Азот, кисень',
            satellites: 'Місяць',
            missions: ['Apollo', 'Міжнародна космічна станція']
        }
    },
    {
        name: 'Марс',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
        description: 'Четверта планета від Сонця, відома як "Червона планета".',
        details: {

            temperature: 'Середня близько -63°C',
            mass: '6.4171×10^23 кг',
            distance: '227.9 млн км від Сонця',
            discovery: 'Відома з давнини',
            atmosphere: 'Вуглекислий газ, азот, аргон',
            satellites: 'Фобос, Деймос',
            missions: ['Viking', 'Mars Pathfinder', 'Mars Exploration Rovers', 'Curiosity',
                'Perseverance']
        }
    },
    {
        name: 'Юпітер',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
        description: 'Найбільша планета Сонячної системи, газовий гігант.',
        details: {
            temperature: 'Середня близько -108°C',
            mass: '1.8982×10^27 кг',
            distance: '778.5 млн км від Сонця',
            discovery: 'Відома з давнини',
            atmosphere: 'Водень, гелій',
            satellites: 'Понад 79 супутників, включаючи Іо, Європу, Ганімед, Каллісто',
            missions: ['Pioneer', 'Voyager', 'Galileo', 'Juno']
        }
    },
    {
        name: 'Сатурн',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
        description: 'Відома своїми кільцями, шоста планета від Сонця.',
        details: {
            temperature: 'Середня близько -139°C',
            mass: '5.6834×10^26 кг',
            distance: '1.43 млрд км від Сонця',
            discovery: 'Відома з давнини',
            atmosphere: 'Водень, гелій',
            satellites: 'Понад 82 супутники, включаючи Титан, Енцелад',
            missions: ['Pioneer 11', 'Voyager', 'Cassini–Huygens']
        }
    },
    {
        name: 'Уран',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
        description: 'Сьома планета від Сонця, крижаний гігант з унікальним нахилом осі.',
        details: {
            temperature: 'Середня близько -195°C',
            mass: '8.6810×10^25 кг',

            distance: '2.87 млрд км від Сонця',
            discovery: '1781 рік, Вільям Гершель',
            atmosphere: 'Водень, гелій, метан',
            satellites: '27 відомих супутників, включаючи Титанію, Оберон',
            missions: ['Voyager 2']
        }
    },
    {
        name: 'Нептун',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg',
        description: 'Восьма планета від Сонця, крижаний гігант з найсильнішими вітрами.',
        details: {
            temperature: 'Середня близько -201°C',
            mass: '1.02413×10^26 кг',
            distance: '4.5 млрд км від Сонця',
            discovery: '1846 рік, Урбен Левер\'єр та Джон Куч Адамс',
            atmosphere: 'Водень, гелій, метан',
            satellites: '14 відомих супутників, включаючи Тритон',
            missions: ['Voyager 2']
        }
    }
];

class HomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar>
                    <ion-title>Планети Сонячної системи</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-grid>
                    <ion-row>
                    ${planets.map(planet => `
                        <ion-col size="12" size-sm="6" size-md="4">
                            <ion-card class="planet-card" button href="/planet/${planet.name}">
                                <ion-img src="${planet.image}"></ion-img>
                                <ion-card-header>
                                    <ion-card-title>${planet.name}</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    <p>${planet.description}</p>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    `).join('')}
                </ion-row>
                </ion-grid>
            </ion-content>
        `;
    }
}

class PlanetPage extends HTMLElement {
    connectedCallback() {
        const currentPlanetHash = window.location.hash;
        const planetName = decodeURI(currentPlanetHash.split('/').pop());
        const planet = planets.find(p => p.name === planetName);

        this.innerHTML = `
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title>${planet.name}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-breadcrumbs>
                    <ion-breadcrumb href="/">Головна</ion-breadcrumb>
                    <ion-breadcrumb>${planet.name}</ion-breadcrumb>
                </ion-breadcrumbs>
                <ion-img src="${planet.image}"></ion-img>
                <ion-card>
                    <ion-card-content>
                        <p>${planet.description}</p>
                    </ion-card-content>
                </ion-card>
                <ion-chip color="primary">
                    <ion-label>Температура: ${planet.details.temperature}</ion-label>
                </ion-chip>
                <ion-chip color="primary">
                    <ion-label>Маса: ${planet.details.mass}</ion-label>
                </ion-chip>
                <ion-chip color="primary">
                    <ion-label>Відстань від Сонця: ${planet.details.distance}</ion-label>   
                </ion-chip>
                <ion-chip color="primary">
                    <ion-label>Рік відкриття: ${planet.details.discovery}</ion-label>
                </ion-chip>
                <ion-accordion-group>
                    <ion-accordion value="atmosphere">
                        <ion-item slot="header">
                            <ion-label>Хімічний склад атмосфери</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <p>${planet.details.atmosphere}</p>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="satellites">
                        <ion-item slot="header">
                            <ion-label>Супутники</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <p>${planet.details.satellites}</p>
                        </div>
                    </ion-accordion>
                    <ion-accordion value="missions">
                        <ion-item slot="header">
                            <ion-label>Дослідження</ion-label>
                        </ion-item>
                        <div class="ion-padding" slot="content">
                            <ion-list>
                                ${planet.details.missions.map(mission => `
                                    <ion-item>${mission}</ion-item>
                                `).join('')}
                            </ion-list>
                        </div>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
    `;
    }
}

customElements.define('page-home', HomePage);
customElements.define('page-planet', PlanetPage);