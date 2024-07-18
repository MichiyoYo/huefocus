export interface StateType {
  round: Round;
  timer: Timer;
  mode: Mode;
  autoPlay: boolean;
}

export type DispatchType = (action: ActionType) => void;

export interface ActionType {
  type: string;
  payload: PayloadType;
}

export type PayloadType = Mode | Timer | Time | Round;
