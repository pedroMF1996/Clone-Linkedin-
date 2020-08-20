import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://scontent.frao2-1.fna.fbcdn.net/v/t1.0-9/118014909_3690352740993616_496648552162051191_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeHIHA5NjT6msxFaDqzqZAQ5yZgvyggO01HJmC_KCA7TUd49n727-PNoM6Krtt_DK63kn-mOqBRsuqZdfbbMTr1r&_nc_ohc=dYZ4iF8yxOIAX-rj9fy&_nc_ht=scontent.frao2-1.fna&oh=f85ac737760875420f01f8b536efc8cd&oe=5F6081C2"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Pedro Martins Falleiros</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
