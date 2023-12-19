import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  transition: background 0.4s;
  overflow: hidden;
  padding: 0;
  background: transparent;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')}; /* Cambiar color del texto según el tema */
  border-color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')}; /* Cambiar color del texto según el tema */
  .slider-content {
    display: flex;
    position: relative;
  }

  .label-ch,
  .label-gl {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.4s, font-weight 0.4s, color 0.4s; /* Agregar transición para el color del texto */
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  .label-ch {
    left: ${({ version }) => (version === 'cnversion' ? '0' : '100%')};
  }

  .label-gl {
    left: ${({ version }) => (version === 'cnversion' ? '-100%' : '0')};
  }
`;
