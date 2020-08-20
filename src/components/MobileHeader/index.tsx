import React from 'react'
import { Container, ProfileCircle, SearchInput,  MessageIcon} from './style'

export default function index() {
    return (
        <Container>
                <ProfileCircle src="https://scontent.frao2-1.fna.fbcdn.net/v/t1.0-9/118014909_3690352740993616_496648552162051191_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeHIHA5NjT6msxFaDqzqZAQ5yZgvyggO01HJmC_KCA7TUd49n727-PNoM6Krtt_DK63kn-mOqBRsuqZdfbbMTr1r&_nc_ohc=dYZ4iF8yxOIAX-rj9fy&_nc_ht=scontent.frao2-1.fna&oh=f85ac737760875420f01f8b536efc8cd&oe=5F6081C2"/>
                <SearchInput placeholder="Pesquisar"/>
                <MessageIcon />
        </Container>
    )
}
