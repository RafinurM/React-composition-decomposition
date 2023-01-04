import AdditionalLinks from "./AdditionalLinks"
import Advertising from "./Advertising"
import News from "./News"
import Search from "./Search"
import React from "react"
import NewsItems from "./News/NewsItems"
import Exchange from "./News/Exchange"
import Tags from "./Search/Tags"
import SearchInput from "./Search/SearchInput"
import Poster from "./Advertising/Poster"
import Weather from "./AdditionalLinks/Weather"
import Section from "./AdditionalLinks/Section"
import LinksContent from "./AdditionalLinks/LinksContent"
import TelevisionContent from "./AdditionalLinks/TelevisionContent"

/**
 * 
 * Показывает главную страницу приложения, содержит блок новостей, поиск, рекламу и дополнительные ссылки
 */

function Main() {
    let data = {
        news: [
            {
                id: 774,
                title: 'Новость!',
                url: '#'
            },
            {
                id: 7742,
                title: 'Вот так новость!',
                url: '#'
            },
            {
                id: 7274,
                title: 'Ещё одна новость!',
                url: '#'
            },
            {
                id: 711174,
                title: 'Ну эта новость никого не удивит...',
                url: '#'
            },
            {
                id: 77422222,
                title: 'Снова новости',
                url: '#'
            }
        ],
        exchangeData: [
            {
                id: 123,
                currency: 'USD',
                value: 60,
            },
            {
                id: 2002,
                currency: 'EUR',
                value: 70,
            },
            {
                id: 882,
                currency: 'Нефть',
                value: 160,
            },
            {
                id: 99222,
                currency: 'Золото',
                value: 2600
            }
        ],
        tags: ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'],
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0_%D0%B2_%D1%82%D1%80%D0%B0%D0%BC%D0%B2%D0%B0%D0%B5.jpg/315px-%D0%A0%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0_%D0%B2_%D1%82%D1%80%D0%B0%D0%BC%D0%B2%D0%B0%D0%B5.jpg',
        weather: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YFry8jZuP8Lof9Nqx-OSwDveby8Mn_sJ0A&usqp=CAU',
            sign: 1,
            state: 27,
            morningState: 14,
            eveningState: 19

        },
        stream: {
            url: 'data:image/png;base64,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'
        },
        content: [
            {
                name: 'Недвижимость',
                url: '#',
                description: 'о сталинках',
                id: 12210,
                type: 'link'
            },
            {
                name: 'Маркет',
                url: '#',
                description: 'люстры и светильники',
                id: 12211,
                type: 'link'
            },
            {
                name: 'Авто.ру',
                url: '#',
                description: 'привод 4х4 до 500 000',
                id: 12212,
                type: 'link'
            },
            {
                name: 'ТНТ.Best',
                url: '#',
                description: 'THT International',
                time: '02:00',
                id: 23332,
                type: 'television'
            },
            {
                name: 'Джинглики',
                url: '#',
                description: 'Карусель INT',
                time: '02:15',
                id: 200011,
                type: 'television'
            },
            {
                name: 'Наедине со всеми',
                url: '#',
                description: 'Первый',
                time: '02:25',
                id: 200012,
                type: 'television'
            }
        ]
    }

    return (
        <>
            <News title='Новости сегодня'>
                <NewsItems news={data.news} />
                <Exchange data={data.exchangeData} />
            </News>
            <Search>
                <Tags tags={data.tags} />
                <SearchInput />
            </Search>
            <Advertising>
                <Poster url={data.poster}/>
            </Advertising>
            <AdditionalLinks>
                <Weather url={data.weather.url} state={data.weather.state} morningState={data.weather.morningState} eveningState={data.weather.eveningState} sign={data.weather.sign}/>
                <div style={{ display: 'flex' }}>
                    <Section title='Посещаемое' >
                        <LinksContent content={data.content} />
                    </Section>
                    <Section title='Телепрограмма' stream={data.stream} >
                        <TelevisionContent content={data.content} />
                    </Section>
                </div>
            </AdditionalLinks>
        </>
    )
}

export default Main
