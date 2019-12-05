export interface IEntityState<T> {
  isLoading: boolean;
  data: T[];
  entities: {[key: string]: T };
  errors: any;
}
