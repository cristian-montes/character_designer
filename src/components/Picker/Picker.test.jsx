import {screen, render} from '@testing-library/react';
import Picker from './Picker';

it('it should render Picker Component', ()=> {
    const {container } = render(<Picker/>);
    const labelText = screen.getByLabelText(/Head/)


    expect(container).toMatchSnapshot();
    expect(labelText).toBeInTheDocument();
})