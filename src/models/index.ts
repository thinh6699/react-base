export class Tasks {
  id!: number
  name: string = ''
  isCompleted: boolean = false
  isEdit: boolean = false
  constructor(init?: Partial<Tasks>) {
    Object.assign(this, init)
  }
}

export class SimpleModel {
  text: string = 'Vietnamese'
  code: string = 'vi'
  constructor(init?: Partial<SimpleModel>) {
    Object.assign(this, init)
  }
}
