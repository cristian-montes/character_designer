import { render} from "@testing-library/react";
import Phrase from './Phrase';

describe('Shows Phrases', ()=> {
    it('shuold render Phrases Component', ()=> {
        const {container} = render(
            <Phrase phrases={['Hello My Brudda', 'My friend', 'Potatoes']} />
        )
    
        expect(container).toMatchSnapshot();
    });

})