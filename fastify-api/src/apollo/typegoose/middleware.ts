// https://github.com/MichalLytek/type-graphql/blob/master/examples/typegoose/typegoose-middleware.ts

import { DocumentType, getClassForDocument, isDocument } from '@typegoose/typegoose';
import { MiddlewareFn } from 'type-graphql';

const convertDocument = (doc: DocumentType<unknown>) => {
  // if there is a document we know there has to be a class for it
  const documentClass = getClassForDocument(doc)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  const converted = doc.toObject();

  Object.setPrototypeOf(converted, Object.getPrototypeOf(documentClass));

  return converted;
};

const TypegooseMiddleware: MiddlewareFn = async (data, next) => {
  const result = await next();

  if (Array.isArray(result)) {
    return result.map((item) => (isDocument(item) ? convertDocument(item) : item));
  }

  if (isDocument(result)) {
    return convertDocument(result);
  }

  return result;
};

export default TypegooseMiddleware;
