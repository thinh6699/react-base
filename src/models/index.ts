export class Tasks {
  id!: number
  name: string = ''
  isCompleted: boolean = false
  constructor(init?: Partial<Tasks>) {
    Object.assign(this, init)
  }
}
