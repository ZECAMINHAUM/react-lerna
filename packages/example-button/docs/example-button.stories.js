'use strict';
import React from 'react';

import { Button } from '../lib/example-button';

export default { title: 'Button' };

export const primary = () => <Button>Exemplo de Botão</Button>;
export const secondary = () => <Button variant="secondary">Exemplo botão 2</Button>;
