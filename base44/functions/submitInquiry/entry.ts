import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { name, company_name, email, phone, freight_volume, message } = body;

    if (!name || !company_name || !phone || !freight_volume) {
      return Response.json(
        { error: "Missing required fields: name, company_name, phone, freight_volume" },
        { status: 400 }
      );
    }

    const record = await base44.asServiceRole.entities.SubcontractingInquiry.create({
      name,
      company_name,
      email: email || null,
      phone,
      freight_volume,
      message: message || null
    });

    return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}