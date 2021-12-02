import {screen, render} from '@testing-library/react';
import Character from './Character';


it('Should render the Character Component', async()=>{
    const {container} = render(<Character head='alien' middle='hoodie' bottom='jeans'/>);

    const tag = await screen.findAllByRole('article');

    expect(container).toMatchSnapshot()
    expect(tag[0]).toBeInTheDocument();
});