import React from 'react';
import Story from '../components/Story';
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        img="https://img-dotcom-media.s3.us-east-2.amazonaws.com/assets/d9d63ede-6b16-11e6-932c-cdbbf8730860.jpg?v=2"
        profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUctAvHIkij3od1X36ehxg3guUyX98lTscGQ&usqp=CAU"
        tittle="Sanday match soccer"
      />
      <Story
        img="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6"
        profileImg="https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg"
        tittle="Friday final cup"
      />
      <Story
        img="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-03/14853238_1824466137837589_3678635347886148652_o_0.jpg?itok=_n098wmt"
        profileImg="https://fedspendingtransparency.github.io/assets/img/user_personas/journalist_mug.jpg"
        tittle="Before match soccer"
      />
      <Story
        img="https://events.airfinancejournal.com/wp-content/uploads/2019/12/ca1dc237-46946663481-1d20058f2b-c_0im0ce00000000000001o.jpg"
        profileImg="https://uifaces.co/our-content/donated/KtCFjlD4.jpg"
        tittle="My favorit conference"
      />
      <Story
        img="https://events.airfinancejournal.com/wp-content/uploads/2019/12/ca1dc237-46946663481-1d20058f2b-c_0im0ce00000000000001o.jpg"
        profileImg="https://uifaces.co/our-content/donated/KtCFjlD4.jpg"
        tittle="My favorit conference"
      />
    </div>
  );
};

export default StoryReel;
