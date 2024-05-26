import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    
    it('Deve permitir adicionar dois comentários', () => {
        render(<PostComment/>);

        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('submit-button');

        // Adicionar primeiro comentário
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Adicionar segundo comentário
        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
