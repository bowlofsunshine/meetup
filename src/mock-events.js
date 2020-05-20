const mockEvents =
{
    city: {
        id: 1007700,
        city: 'München',
        lat: 48.14,
        lon: 11.58,
        state: '',
        country: 'de',
        zip: 'meetup3',
        member_count: 1257
    },
    events: [
        {
            created: 1574974495000,
            duration: 10800000,
            fee: {
                accepts: 'paypal',
                amount: 15,
                currency: 'EUR',
                description: '',
                label: 'Price',
                required: true
            },
            id: '266813030',
            name: 'Agile Game Night #42 - Murmelbahnspiel',
            rsvp_limit: 15,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1594917000000,
            local_date: '2020-07-16',
            local_time: '18:30',
            updated: 1582196146000,
            utc_offset: 7200000,
            waitlist_count: 0,
            yes_rsvp_count: 3,
            is_online_event: false,
            group: {
                created: 1471362725000,
                name: 'Agile Game Nights',
                id: 20321716,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Agile-Game-Night',
                who: 'Agile Gamer',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Agile-Game-Night/events/266813030/',
            description: 'ATTENTION: We decide at the beginning of June based on the current situation whether we will play live or remotely!',
            visibility: 'public',
            member_pay_fee: false
        }
    ]
}

export { mockEvents };