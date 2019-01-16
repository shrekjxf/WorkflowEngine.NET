﻿var AngularBPWorkflowDesignerConstants = {
  ActivityColor: "#ECF0F1",
  ActivityTextColor: "#2D3436",
  ActivityInitialColor: "#27AE60",
  ActivityInitialTextColor: "#FFFFFF",
  ActivityFinalColor: "#2980B9",
  ActivityFinalTextColor: "#FFFFFF",
  ActivityShape: "#CECECE",
  SelectColor: "#F39C12",
  SelectTextColor: "#FFFFFF",
  SelectSubProcessColor: "#e3b015",
  SelectSubProcessTextColor: "#FFFFFF",
  ButtonActive: "#D4D8D9",
  BarColor: "#EDF1F2",
  BarSeparatorColor: "#D9DEE0",
  DeleteConfirm: "Tem certeza de que deseja excluir o (s) item (ns) selecionado (s)?",
  DeleteConfirmCurrent: "Tem certeza de que deseja excluir este item?",
  FieldIsRequired: "Campo é obrigatório!",
  FieldMustBeUnique: "O campo deve ser único!",
  ButtonTextDelete: "Excluir",
  ButtonTextCreate: "Crio",
  ButtonTextSave: "Salve",
  ButtonTextYes: "Sim",
  ButtonTextNo: "Não",
  ButtonTextCancel: "Cancelar",
  ButtonTextClose: "Perto",
  ButtonTextUndo: "Desfazer",
  ButtonTextRedo: "Refazer",
  SaveConfirm: "Salvar alterações?",
  CloseWithoutSaving: "Fechar sem salvar?",
  DialogConfirmText: "Questão",
  None: "Nenhum",
  Warning: "Aviso",
  InfoBlockLabel: {
    Activity: "Actividades:",
    Transition: "Transições:",
    Command: "Comandos:"
  },
  ActivityNamePrefix: "Atividade_",
  ActivityFormLabel: {
    Title: "Atividade",
    Name: "Nome",
    State: "Estado",
    IsInitial: "Inicial",
    IsFinal: "Final",
    IsForSetState: "Para o estado definido",
    IsAutoSchemeUpdate: "Atualização do esquema automático",
    Implementation: "Implementação",
    PreExecutionImplementation: "Implementação de pré-execução",
    ImpOrder: "Ordem",
    ImpAction: "Açao",
    ImpActionParameter: "Parâmetro de ação",
    AlwaysConditionShouldBeSingle: "Sempre condição deve ser único",
    OtherwiseConditionShouldBeSingle: "Caso contrário, a condição deve ser única"
  },
  TransitionFormLabel: {
    Title: "Transição",
    Name: "Nome",
    From: "Da atividade",
    To: "Para atividade",
    Classifier: "Classificador",
    Restrictions: "Restrições",
    RestrictionsType: "Tipo",
    RestrictionsActor: "Ator",
    Condition: "Condição",
    ConditionType: "Tipo",
    ConditionAction: "Açao",
    ResultOnPreExecution: "Resultado na pré-execução",
    Trigger: "Desencadear",
    TriggerType: "Tipo",
    TriggerCommand: "Comando",
    TriggerTimer: "Cronômetro",
    ConditionActionParameter: "Parâmetro de ação",
    ConditionInversion: "Inverta o resultado da ação",
    ConditionsConcatenationType: "Tipo de concatenação de condições",
    AllowConcatenationType: "Concat permitir como",
    RestrictConcatenationType: "Concat restringir como",
    ConditionsListShouldNotBeEmpty: "A lista de condições não deve estar vazia",
    IsFork: "É garfo",
    MergeViaSetState: "Mesclar subprocesso via estado definido",
    DisableParentStateControl: "Desativar controle de processo pai",
    ShowConcatParameters: "Mostrar concatenação",
    HideConcatParameters: "Ocultar concatenação"
  },
  LocalizationFormLabel: {
    Title: "Localização",
    ObjectName: "ObjectName",
    Type: "Tipo",
    IsDefault: "IsDefault",
    Culture: "Cultura",
    Value: "Valor",
    Types: [
      "Command",
      "State",
      "Parameter"
    ]
  },
  TimerFormLabel: {
    Title: "Temporizadores",
    Name: "Nome",
    Type: "Tipo",
    Value: "Valor",
    Types: [
      "Command",
      "State",
      "Parameter"
    ],
    NotOverrideIfExists: "Não anule o temporizador se existir"
  },
  ParameterFormLabel: {
    Title: "Parâmetros",
    Name: "Nome",
    Type: "Tipo",
    Purpose: "Propósito",
    Value: "Valor",
    InitialValue: "Valor inicial",
    ShowSystemParameters: "Mostrar parâmetros do sistema"
  },
  ActorFormLabel: {
    Title: "Atores",
    Name: "Nome",
    Rule: "Regra",
    Value: "Valor"
  },
  CommandFormLabel: {
    Title: "Comando",
    Name: "Nome",
    InputParameters: "Parâmetros de entrada",
    InputParametersName: "Nome",
    InputParametersIsRequired: "Requeridos",
    InputParametersParameter: "Parâmetro",
    InputParametersDefaultValue: "Padrão"
  },
  AdditionalParamsFormLabel: {
    Title: "Parâmetros Adicionais",
    IsObsolete: "IsObsolete",
    DefiningParameters: "Definindo Parâmetros",
    ProcessParameters: "Parâmetros do processo",
    ProcessParametersName: "Nome",
    ProcessParametersValue: "Valor"
  },
  CodeActionsFormLabel: {
    Title: "Ações de código",
    Name: "Nome",
    ActionCode: "Código de ação",
    IsGlobal: "É global",
    IsAsync: "Assíncrono",
    Type: "Tipo",
    GlobalDeleteMessage: "Você excluiu a Ação de código global. <br/> <b> Outros esquemas não poderão chamar isso de CodeAction! </ B>",
    UnGlobalMessage: "Você alterou o estado do sinalizador global. <br/> Será criada uma Ação de Código Local com base nesta Ação Global de Código após salvar este esquema."
  },
  ToolbarLabel: {
    CreateActivity: "Criar atividade",
    CopySelected: "Copiar selecionado",
    Undo: "Desfazer",
    Redo: "Refazer",
    Move: "Mover",
    ZoomIn: "Mais Zoom",
    ZoomOut: "Reduzir o zoom",
    ZoomPositionDefault: "Padrão de zoom",
    FullScreen: "Tela cheia",
    Refresh: "Atualizar",
    AutoArrangement: "Auto arranjo",
    Actors: "Atores",
    Commands: "Comandos",
    Parameters: "Parâmetros",
    Localization: "Localização",
    Timers: "Temporizadores",
    AdditionalParameters: "Parâmetros Adicionais",
    CodeActions: "Ações de código",
    Info: "Informação ampliada",
    Delete: "Excluir",
    Clone: "Clone",
    Settings: "Definições",
    CreateTransition: "Crie uma transição",
    CreateActivityTransition: "Crie uma atividade e uma transição",
    Legend: "lenda"
  },
  ErrorActivityIsInitialCountText: "Um elemento deve ser marcado como inicial",
  ErrorReadOnlySaveText: "O Designer no modo ReadOnly, você não pode salvá-lo.",
  FormMaxHeight: 700,
  EditCodeSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditCodeLabel: {
    Title: "Editar código",
    EditCodeButton: "Editar código",
    Usings: "Usos",
    Compile: "Compilar",
    CompileSucceeded: "Compilação bem sucedida.",
    Success: "Sucesso",
    Error: "Erro",
    OK: "Está bem",
    ShowUsings: "Mostrar utilizações",
    HideUsings: "Esconder usings"
  },
  EditJSONSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 480
  },
  EditJSONLabel: {
    Title: "Editar valor em JSON",
    CreateEmptyType: "Crio",
    Format: "Formato"
  },
  isjava: false,
  OverviewMap: {
    show: true,
    width: 300,
    height: 150
  },
  UndoDepth: 200,
  DefaultCulture: "pt-BR"
};

