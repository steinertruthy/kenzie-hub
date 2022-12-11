import styled from "styled-components";

export const ContainerSelectGroup = styled.div`
  width: 100%;
  margin-bottom: 1.375rem;
`;

export const Label = styled.label`
  font-size: var(--sz-text-2);
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  color: var(--color-gray-4);
  background-color: var(--color-gray-2);
  padding: 0.875rem 0.75rem;
  outline: none;
  border: 0.0625rem solid transparent;
  border-radius: var(--bd-radius);
  margin-top: 0.75rem;
  font-size: var(--sz-text-2);

  &:focus {
    border-color: var(--color-gray-4);
  }
`;

export const TextSelectError = styled.span`
  display: block;
  font-size: var(--sz-text-2);
  color: var(--color-negative);
  font-weight: var(--font-weg-4);
  margin-top: 0.4375rem;
`;
