export async function getRequest(path: string): Promise<any> {
  try {
    const response = await fetch(path);

    const responseJSON = await response.json();

    return responseJSON;
  } catch (error) {
    return { error };
  }
}

export async function postRequest(path: string, data: any): Promise<any> {
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJSON = await response.json();

    return responseJSON;
  } catch (error) {
    return { error };
  }
}

export async function deleteRequest(path: string): Promise<any> {
  try {
    const response = await fetch(path, {
      method: "DELETE",
    });

    const responseJSON = await response.json();

    return responseJSON;
  } catch (error) {
    return { error };
  }
}
