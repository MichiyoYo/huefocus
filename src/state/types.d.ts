export interface StateType {
  round: Round;
  timer: Timer;
  mode: Mode;
}

export interface ActionType {
  type: string;
  payload: PayloadType;
}

export type PayloadType = Mode | Timer | Time | Round;
