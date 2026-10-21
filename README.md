# React + Vite EXERCÍCIOS CRUD

9. Exercício de fixação — Analisando a evolução dos DAOs
   Considere os códigos implementados nesta parte e responda:

1. Qual é a principal diferença entre PFDAOLocal.mjs e PFDAOBackEnd.mjs?

1. Por que os métodos listar(), salvar(), atualizar() e excluir() foram implementados como funções assíncronas?

1. Qual é a finalidade da propriedade baseUrl?

1. Por que utilizamos JSON.stringify() nas operações POST e PUT?

1. Qual é a diferença entre os métodos toPlain() e mapPF()?

1. Por que o método listar() precisa aguardar a conclusão de carregarLista() quando o cache ainda não foi carregado?

1. Qual é a finalidade do atributo cacheCarregado?

1. O que acontecerá se um componente ReactJS chamar dao.listar() sem utilizar await ou outro mecanismo para tratar a Promise retornada?

Considere o componente ListaPessoasBack.jsx implementado nesta parte.

Responda:

1. Qual é a principal diferença entre o carregamento de dados em ListaPessoas.jsx e ListaPessoasBack.jsx?

2. Por que utilizamos await na chamada de dao.carregarLista()?

3. Qual é a finalidade do estado loading?

4. Por que o filtro por nome não precisa realizar uma nova requisição HTTP a cada alteração?

5. Qual é a responsabilidade do estado excluindoId?

6. Por que a mensagem de sucesso da exclusão somente deve ser apresentada depois da resposta do DAO?

7. Qual é a finalidade de utilizar try/catch/finally nas operações de consulta e exclusão?

8. Por que utilizamos useRef para preservar as instâncias dos DAOs?

9. O que poderá acontecer se duas consultas forem iniciadas em sequência e a primeira terminar depois da segunda?

10. Qual é a finalidade do identificador consultaAtual?
    Considere o código desenvolvido nesta parte e responda:

11. Qual é a principal diferença entre VisualizarPessoa.jsx e VisualizarPessoaBack.jsx?

12. Qual é a finalidade do hook useParams()?

13. Por que utilizamos await antes de chamar dao.buscarPorId(id)?

14. Qual é a vantagem de utilizar buscarPorId(id) em vez de consultar todos os registros e aplicar find()?

15. Por que o estado loading foi inicializado com true?

16. Qual é a diferença entre um registro não encontrado e uma falha de comunicação?

17. Por que tipo e id foram incluídos no array de dependências do useEffect?

18. Qual é a finalidade da variável ativo?

19. Por que utilizamos o operador ?. ao apresentar os atributos de endereço?

20. Como o componente diferencia a apresentação de CPF/CNPJ e Título Eleitoral/Inscrição Estadual?

21. Exercício de fixação — Analisando o formulário com backend
    Considere o componente PessoaFormBack.jsx implementado nesta parte.

Responda:

1. Qual é a principal diferença entre PessoaFormOO.jsx e PessoaFormBack.jsx?

2. Como o componente identifica se está no modo cadastro ou edição?

3. Por que o formulário precisa aguardar dao.buscarPorId(id) no modo edição?

4. Qual é a finalidade de utilizar form.setFieldsValue()?

5. Por que utilizamos dayjs() para preencher o campo de data da Inscrição Estadual?

6. Qual é a responsabilidade da função construirPessoa()?

7. Por que continuamos utilizando as classes PF, PJ, Endereco, Telefone, Titulo e IE?

8. Qual é a diferença entre dao.salvar() e dao.atualizar()?

9. Por que o botão Salvar deve permanecer em estado de processamento enquanto o backend não responder?

10. Qual é a vantagem de manter os campos preenchidos quando ocorre uma falha no envio?

11. Exercício de fixação — Analisando a integração final
    Considere a aplicação desenvolvida e responda:

12. Qual é a responsabilidade do arquivo AppRoutesBack.jsx?

13. Por que o componente MainLayout.jsx não precisa ser reconstruído para utilizar o backend?

14. Qual é a função do componente Outlet?

15. Como a aplicação identifica se PessoaFormBack.jsx está sendo utilizado para cadastro ou edição?

16. Qual é a diferença entre os arquivos AppRoutes.jsx e AppRoutesBack.jsx?

17. Por que os DAOs locais foram preservados?

18. Qual é a vantagem de manter a comunicação HTTP concentrada nos DAOs?

19. Por que devemos verificar o conteúdo do JSON enviado durante as operações POST e PUT?

20. Como podemos identificar, nas ferramentas de desenvolvedor, se uma operação utiliza GET, POST, PUT ou DELETE?

21. Por que uma resposta HTTP bem-sucedida não é suficiente para garantir que todos os atributos de um cadastro foram armazenados corretamente?
