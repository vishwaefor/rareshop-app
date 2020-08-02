import { Article } from '../../models/Article';

const initialState = {
  articles: [
    new Article(
      '1',
      'Penguin Ear',
      "Penguin Ear is a rare asset. When you look at a penguin's head you can see their eyes, their beak, even a tongue if they open up. But you will not see any ears.",
      'https://blogpatagonia.australis.com/wp-content/uploads/2016/08/iStock_76698321_SMALL.jpg'
    ),
    new Article(
      '2',
      'Horse Hoe',
      'A horseshoe is a fabricated product, normally made of metal, although sometimes made partially or wholly of modern synthetic materials, designed to protect a horse hoof from wear',
      'https://www.thesprucepets.com/thmb/2KTgoB6l0A3jtBz50LWanuidp0k=/1500x844/smart/filters:no_upscale()/GettyImages-157732150-56a4dd8e5f9b58b7d0d99387.jpg'
    ),
    new Article(
        '2',
        'Eagle Feather',
        'A horseshoe is a fabricated product, normally made of metal, although sometimes made partially or wholly of modern synthetic materials, designed to protect a horse hoof from wear',
        'https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Birds/bird_bald-eagle-fishing-canada_larry-paris_600x300.ashx'
      ),
  ],
};


const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default articlesReducer;
