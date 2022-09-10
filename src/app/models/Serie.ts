export class Serie {
    private _nome: string;
    private _autor: string;
    private _episodios: number;
    private _genero: string;
    private _sinopse: string;
    private _data_lancamento: string;
    private _temporada: number;
    private _plataforma: string;
    private _id: any;
  
    constructor(
      nome: string,
      autor: string,
      episodio: number,
      genero: string,
      sinopse: string,
      data_lancamento: string,
      temporada: number,
      plataforma: string
    ) {
      let chave = new Date();
      this._id = chave.getTime();
      this._nome = nome;
      this._autor = autor;
      this._episodios = episodio;
      this._genero = genero;
      this._sinopse = sinopse;
      this._data_lancamento = data_lancamento;
      this._temporada = temporada;
      this._plataforma = plataforma;
    }
  
    public get nome(): string {
      return this._nome;
    }
  
    public set nome(value: string) {
      this._nome = value;
    }
  
    public get autor(): string {
      return this._autor;
    }
  
    public set autor(value: string) {
      this._autor = value;
    }
  
    public get episodio(): number {
      return this._episodios;
    }
  
    public set episodio(value: number) {
      this._episodios = value;
    }
  
    public get genero(): string {
      return this._genero;
    }
  
    public set genero(value: string) {
      this._genero = value;
    }
  
    public get sinopse(): string {
      return this._sinopse;
    }
  
    public set sinopse(value: string) {
      this._sinopse = value;
    }
  
    public get dataLancamento(): string {
      return this._data_lancamento;
    }
  
    public set dataLancamento(value: string) {
      this._data_lancamento = value;
    }
  
    public get temporada(): number {
      return this._temporada;
    }
  
    public set temporada(value: number) {
      this._temporada = value;
    }
  
    public get plataforma(): string {
      return this._plataforma;
    }
  
    public set plataforma(value: string) {
      this._plataforma = value;
    }
  
    public get id(): any {
      return this._id;
    }
  }