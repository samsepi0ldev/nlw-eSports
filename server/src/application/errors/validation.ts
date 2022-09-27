export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field required.'
      : `The field ${fieldName} is required.`
    super(message)
    this.name = 'RequiredFieldError'
  }
}

export class InvalidParamError extends Error {
  constructor (fieldName: string) {
    super(`Invalid param ${fieldName}`)
    this.name = 'InvalidParamError'
  }
}
