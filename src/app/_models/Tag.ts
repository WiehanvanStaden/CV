export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPE_SCRIPT = new Tag('TypeScript', 'blue');
    static readonly REACT_NATIVE = new Tag('React Native', 'cyan');
    static readonly FLUTTER = new Tag('Flutter', 'teal');
    static readonly DART = new Tag('Dart', 'blue');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly CSS = new Tag('CSS', 'blue');
    static readonly JAVA = new Tag('Java', 'brown');
    static readonly CSHARP = new Tag('C#', 'purple');   

    
    private constructor(private readonly key: string, public readonly color: string) {
        
    }

    toString(){
        return this.key;
    }
}