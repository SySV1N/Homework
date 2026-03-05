// export interface serverConfig {
//   port: number;
//   host: string;
//   status: string;
// };

export interface ICommand {
  buttonId: string
  execute(): void;
};